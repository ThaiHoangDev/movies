import Skeleton, {  SkeletonProps } from 'react-loading-skeleton';
import './skeleton.scss';

interface IProp extends SkeletonProps {}

export const SkeletonComp = (props: IProp) => {
  const { height, width, ...rest } = props;
  return (
    <Skeleton
      {...rest}
      baseColor={'#fff'}
      className='skeleton'
      borderRadius={25}
    />
  );
};
