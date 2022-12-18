import React from 'react';

import './movie-box.scss';

import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';

const MovieCard = (props: any) => {
  const { item } = props;

  const link = '/movie/' + item.id;
  const image = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className='movie-box'>
        <div className='box'>
          <img
            src={image}
            className='box-image'
            loading='lazy'
            alt=''
            key={image.toString()}
          />
          <div className='box-conten'>
            <h3>{item.title || item.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
