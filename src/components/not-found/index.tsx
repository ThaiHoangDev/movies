import type { FC } from 'react';

import NotFoundIcon from '../icons/not-found';
import history from '../../utils/history';

export const NotFound: FC = () => {
  const width = '289px';
  const height = '293px';

  const handleGoBack = () => {
    history?.goBack();
  };

  return (
    <div className='container'>
      <NotFoundIcon width={width} height={height} />
      <div>
        <span style={{ fontWeight: 700 }}>Sorry, we can’t find this page</span>
      </div>
      <button color='primary' onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};
