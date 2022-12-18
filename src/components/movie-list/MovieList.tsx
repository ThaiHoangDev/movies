import React from 'react';
import './movie-list.scss';

import MovieCard from '../movie-card/MovieCard';

interface IMovieProps {
  data: any;
}

const MovieList = (props: IMovieProps) => {
  const { data } = props;
  return (
    <div className='movie-list'>
      {data.length > 0 ? (
        data.map((item: any, i: number) => <MovieCard item={item} key={i} />)
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default MovieList;
