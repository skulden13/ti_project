import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from 'features/AuthByUsername/model/selectors';
import { DynamicModuleLoader, ReducersList }
  from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const changeUsernameHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePasswordHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const loginClickHandler = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, className ? [className] : [])}>
        <h1>{t('LogIn')}</h1>
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <hr />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('LoginName')}
          autoFocus
          value={username}
          onChange={changeUsernameHandler}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('LoginPassword')}
          value={password}
          onChange={changePasswordHandler}
        />
        <Button
          type="submit"
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={loginClickHandler}
          disabled={isLoading}
        >
          {t('Login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
