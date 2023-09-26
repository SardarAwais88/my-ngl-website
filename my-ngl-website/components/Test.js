// Example usage in a component
import { useTranslation } from 'next-i18next';

const Test= () => {
  const { t } = useTranslation('common'); // 'common' is the namespace in your translation files

  return <div>{t('welcome_message')}</div>;
};

export default Test;
