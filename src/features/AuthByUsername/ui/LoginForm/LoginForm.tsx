import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, className ? [className] : [])}>
      <h1>{t('LogIn')}</h1>
      <hr />
      <Input type="text" className={cls.input} placeholder={t('LoginName')} autoFocus />
      <Input type="text" className={cls.input} placeholder={t('LoginPassword')} />
      <Button
        type="submit"
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
      >
        {t('Login')}
      </Button>
    </div>
  );
};
