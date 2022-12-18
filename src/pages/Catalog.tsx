import React, { useCallback, useEffect, useState } from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import MovieGrid from '../components/movie-grid/MovieGrid';
import MovieList from '../components/movie-list/MovieList';
import tmdbApi, { categoryObj, movieType } from '../api/movieApi';
import { MovieSearch } from '../components/search/MoviSearch';
import { OutlineButton } from '../components/button/Button';

const Catalog = () => {
  const [view, setView] = useState('Grid');
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams<any>();

  const getList = async () => {
    const params = {};
    try {
      const response: any = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });

      setItems(response.results);
      setTotalPage(response.total_pages);
    } catch (error) {
      console.log('Error');
    } finally {
      isLoading && setIsLoading(false);
      isRefresh && setIsRefresh(false);
    }
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, isRefresh]);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = {
        page: page + 1,
      };
      const response: any = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });

      setItems([...items, ...response.results]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [items, page]);

  const handleSearch = async (keyword: string) => {
    setIsLoading(true);
    if (!!keyword) {
      try {
        const params = {
          page: page,
          query: keyword,
        };
        const response: any = await tmdbApi.search('movie', { params });
        setItems(response.results);
        setPage(page);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    } else {
      getList();
    }
  };

  return (
    <>
      <PageHeader></PageHeader>
      <div className='section mb-3'>
        <MovieSearch category={categoryObj.movie} onSearch={handleSearch} />
      </div>
      <div className='footer'>
        <OutlineButton className='small' onClick={() => setIsRefresh(true)}>
          Refresh
        </OutlineButton>
        <div className='containerBtn'>
          <OutlineButton className='small' onClick={() => setView('Grid')}>
            View Grid
          </OutlineButton>
          <OutlineButton className='small' onClick={() => setView('Table')}>
            View Table
          </OutlineButton>
        </div>
      </div>

      <div className='container'>
        {view === 'Grid' ? (
          <div className='section mb-3'>
            <MovieGrid data={items} isLoading={isLoading || isRefresh} />
          </div>
        ) : (
          <div className='section mb-3'>
            <MovieList data={items} />
          </div>
        )}
        <div className='footer'>
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

export default Catalog;
