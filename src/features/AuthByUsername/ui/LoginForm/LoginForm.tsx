import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loginForm = useSelector(getLoginState);
  const {
    username, password, error, isLoading,
  } = loginForm;

  const changeUsernameHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const changePasswordHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const loginClickHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
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
  );
});
