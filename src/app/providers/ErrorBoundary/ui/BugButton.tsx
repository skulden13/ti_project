import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// Component for testing
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const clickHandler = () => {
    setError((prev) => !prev);
  };

  useEffect(() => { if (error) throw new Error(''); }, [error]);

  return (
    <Button onClick={clickHandler}>
      {t('ErrorBtn')}
    </Button>
  );
};
