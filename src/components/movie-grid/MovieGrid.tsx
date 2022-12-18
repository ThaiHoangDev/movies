import React from 'react';

import './movie-grid.scss';
import MovieBox from '../movie-box/MovieBox';

interface IProps {
  data: any;
  isLoading: boolean;
}

const MovieGrid = (props: IProps) => {
  const { data, isLoading } = props;

  return (
    <>
      <div className='movie-grid'>
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <div className='loading-box'></div>
            ))
          : data.length > 0 &&
            data.map((item: any, i: number) => (
              <MovieBox item={item} key={i} />
            ))}
      </div>
    </>
  );
};

export default MovieGrid;
