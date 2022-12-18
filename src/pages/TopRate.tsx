import React, { useEffect, useState } from 'react';

import { OutlineButton } from '../components/button/Button';
import MovieList from '../components/movie-list/MovieList';

import tmdbApi, { movieType } from '../api/movieApi';
import PageHeader from '../components/page-header/PageHeader';

const TopRate = () => {
  const [items, setItems] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getList = async () => {
    const params = {};
    const response: any = await tmdbApi.getMoviesList(movieType.top_rated, {
      params,
    });

    setItems(response.results);
    setTotalPage(response.total_pages);
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = async () => {
    const params = {
      page: page + 1,
    };
    const response: any = await tmdbApi.getMoviesList(movieType.popular, {
      params,
    });

    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <PageHeader />
      <div className='container'>
        <div className='section mb-3'>
          <div className='section__header mb-2'>
            <h2>Top Rated Movies</h2>
          </div>
          <MovieList data={items} />
          {page < totalPage && (
            <OutlineButton className='small' onClick={loadMore}>
              View more
            </OutlineButton>
          )}
        </div>
      </div>
    </>
  );
};

export default TopRate;
