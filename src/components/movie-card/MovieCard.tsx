import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';

const MovieCard = (props: any) => {
  const item = props.item;
  const link = '/movie/' + item.id;
  const image = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className='movie-card'>
        <div className='box'>
          <img
            src={image}
            className='box-image'
            loading='lazy'
            alt=''
            key={image.toString()}
          />

          <div className='box-conten'>
            <h3>
              Name: <span>{item.title || item.name}</span>
            </h3>
            <h5>
              Overview: <span>{item.overview || ''}</span>
            </h5>
            <h5>
              Vote: <span>item.vote_count</span>
            </h5>
            <h5>{item?.release_date}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
