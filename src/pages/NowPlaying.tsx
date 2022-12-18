// GET
// /movie/

import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import MovieGrid from '../components/movie-grid/MovieGrid';
import MovieList from '../components/movie-list/MovieList';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';
import tmdbApi, { categoryObj, movieType } from '../api/movieApi';
import { MovieSearch } from '../components/search/MoviSearch';

const NowPlaying = () => {
  const [items, setItems] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams<any>();

  const getList = async () => {
    const params = {};
    const response: any = await tmdbApi.getMoviesList(movieType.now_playing, {
      params,
    });

    setItems(response.results);
    setTotalPage(response.total_pages);
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const loadMore = async () => {
    const params = {
      page: page + 1,
    };
    const response: any = await tmdbApi.getMoviesList(movieType.now_playing, {
      params,
    });

    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  const handleSearch = async (keyword: string) => {
    const params = {
      page: page + 1,
      query: keyword,
    };
    const response: any = await tmdbApi.search(categoryObj.movie, { params });
    setItems(response.results);
    setPage(page + 1);
  };

  return (
    <>
      <PageHeader />
      <div className='container'>
        <MovieSearch category={movieType.now_playing} onSearch={handleSearch} />
        <div className='section mb-3'>
          <MovieList data={items} />
        </div>
        {page < totalPage ? (
          <div className='movie-grid__loadmore'>
            <OutlineButton className='small' onClick={loadMore}>
              Load more
            </OutlineButton>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NowPlaying;
