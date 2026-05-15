import { useEffect } from 'react';
import { ProjectTypeEnum } from 'shared/types/project';

export function useInitialEffect(callback: () => void) {
  return useEffect(() => {
    if (__PROJECT__ !== ProjectTypeEnum.STORYBOOK) {
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
