import axiosClient from './axiosClient';

interface Icategory {
  movie: string;
  [key: string]: string;
}

export const categoryObj: Icategory = {
  movie: 'movie',
};

interface IMovieType {
  now_playing: string;
  popular: string;
  top_rated: string;
  [key: string]: string;
}

export const movieType: IMovieType = {
  now_playing: 'now_playing',
  popular: 'popular',
  top_rated: 'top_rated',
};

const tmdbApi = {
  getMoviesList: (type: any, params: any) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, params);
  },

  getVideos: (cate: any, id: any) => {
    const url = categoryObj[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate: any, params: any) => {
    const url = 'search/' + cate;
    return axiosClient.get(url, params);
  },
  detail: (cate: any, id: any, params: any) => {
    const url = categoryObj[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
};

export default tmdbApi;
