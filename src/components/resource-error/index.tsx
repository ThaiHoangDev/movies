import type { FC } from 'react';

import ErrorIcon from '../icons/error-icon';

import history from '../../utils/history';

interface ResourceErrorProps {
  error?: string;
  onRefetch?: () => void;
}
const width = '494px';
const height = '293';

export const ResourceError: FC<ResourceErrorProps> = (props) => {
  const { error, onRefetch } = props;

  const handleGoBack = () => {
    history.goBack();
    !!onRefetch && onRefetch();
  };

  return (
    <div>
      <ErrorIcon width={width} height={height} />
      <div>{error}</div>
      <button
        color='primary'
        style={{
          border: `2px solid grey !important`,
          fontWeight: 700,
        }}
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};
