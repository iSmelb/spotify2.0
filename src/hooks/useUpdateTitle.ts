import { useEffect } from 'react';

export const useUpdateTitle = (
  title: string,
  arrDependencies: any[] = [],
): void => {
  useEffect(() => {
    const defaultTitle = 'Spotify2.0 | ';
    document.title = defaultTitle + title;
  }, arrDependencies);
};
