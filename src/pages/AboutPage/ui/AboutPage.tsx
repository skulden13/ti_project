import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('AboutPage')}</h1>
      <Counter />
    </div>
  );
};

export default AboutPage;
