import { classNames } from 'shared/lib';
import i18n from 'shared/config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, className ? [className] : [])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Language')}
    </Button>
  );
};
