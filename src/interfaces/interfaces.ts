export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface ApiResponse<T> {
  page: number;
  results: T[];
}

export interface GenresResponse {
  genres: Genre[];
}
export interface Genre {
  id: number;
  name: string;
}
export interface GetProfileResponse {
  avatar: Avatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}

interface Avatar {
  gravatar: Gravatar;
  tmdb: Tmdb;
}

interface Tmdb {
  avatar_path: string;
}

interface Gravatar {
  hash: string;
}
 