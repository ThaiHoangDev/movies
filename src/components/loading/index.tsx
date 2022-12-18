import type { FC } from 'react';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import LoadingBar from 'react-top-loading-bar';

export const LoadingScreen: FC = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <LoadingBar color='#f11946' height={10} />
      loading...
    </div>
  );
};
