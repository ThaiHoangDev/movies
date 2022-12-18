import React, { useEffect, useState } from 'react';
import { OutlineButton } from '../components/button/Button';
import MovieList from '../components/movie-list/MovieList';

import tmdbApi, { categoryObj, movieType } from '../api/movieApi';
import PageHeader from '../components/page-header/PageHeader';
import { MovieSearch } from '../components/search/MoviSearch';

const Home = () => {
  const [items, setItems] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getList = async () => {
    try {
      const params = {};
      const response: any = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });

      setItems(response.results);
      setTotalPage(response.total_pages);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = () => {
    getList();
  };

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

  const handleSearch = async (keyword: string) => {
    if (!!keyword) {
      const params = {
        page: page + 1,
        query: keyword,
      };
      const response: any = await tmdbApi.search(categoryObj.movie, { params });
      setItems(response.results);
      setPage(page + 1);
    } else {
      getList();
    }
  };

  return (
    <>
      <PageHeader />
      <MovieSearch category={movieType.popular} onSearch={handleSearch} />
      <div className='container'>
        <div className='section mb-3 mt-3'>
          <div className='section__header mb-2'>
            <OutlineButton className='small' onClick={handleRefresh}>
              Refresh
            </OutlineButton>
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

export default Home;
