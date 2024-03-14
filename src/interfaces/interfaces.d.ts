type URLTypeSort =
  | "original_title.asc"
  | "original_title.desc"
  | "popularity.asc"
  | "popularity.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "title.asc"
  | "title.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";

type Monetezation = "flatrate" | "free" | "ads" | "rent" | "buy";

export interface IParams {
  certification?: string,
  "certification.gte"?: string,
  "certification.lte"?: string,
  certification_country?: string,
  include_adult?: boolean,
  include_video?: boolean,
  language?: string,
  page?: number,
  primary_release_year?: number,
  "primary_release_date.gte"?: string,
  "primary_release_date.lte"?: string,
  region?: string,
  "release_date.gte"?: string,
  "release_date.lte"?: string,
  sort_by?: URLTypeSort,
  "vote_average.gte"?: number,
  "vote_average.lte"?: number,
  "vote_count.gte"?: number,
  "vote_count.lte"?: number,
  watch_region?: string,
  with_cast?: string,
  with_companies?: string,
  with_crew?: string,
  with_genres?: string,
  with_keywords?: string,
  with_origin_country?: string,
  with_original_language?: string,
  with_people?: string,
  with_release_type?: 1 | 2 | 3 | 4 | 5 | 6,
  "with_runtime.gte"?: number,
  "with_runtime.lte"?: number,
  with_watch_monetization_types?: Monetezation,
  with_watch_providers?: string,
  without_companies?: string,
  without_genres?: string,
  without_keywords?: string,
  without_watch_providers?: string,
  year?: number
}

export interface IGenre {
  id: number,
  name: string
}

export interface IGenres {
  genres: IGenre[]
}

export interface IMovie {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

export interface IMovies {
  page: number;
  results: IPopResult[];
  total_pages: number;
  total_results: number
}

export interface IMovieData {
  data: IMovies
}

export interface IGenresRequest {
  action_movies?: string,
  adventure_movies?: string,
  animations_movies?: string,
  comedy_movies?: string,
  crime_movies?: string,
  documentary_movies?: string,
  drama_movies?: string,
  family_movies?: string,
  fantasy_movies?: string,
  history_movies?: string,
  horror_movies?: string,
  music_movies?: string,
  mystery_movies?: string,
  romance_movies?: string,
  science_fiction_movies?: string,
  tv_movies?: string,
  thriller_movies?: string,
  war_movies?: string,
  western_movies?: string,
}

export interface ICast {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  cast_id: number,
  character: string,
  credit_id: string,
  order: number
}

export interface ICrew {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: null | string,
  credit_id: string,
  department: string,
  job: string
}

export interface ICredits {
  cast: ICast[],
  crew: ICrew[],
  id: number
}

export interface IPhoto {
  aspect_ratio: number,
  height: number,
  iso_639_1: string | null,
  file_path: string | null,
  vote_average: number,
  vote_count: number,
  width: number
}

export interface IPhotos {
  backdrops: IPhoto[],
  logos: IPhoto[],
  posters: IPhoto[],
  id: number
}

export interface IVideo {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string
}

export interface ICompanies {
  id: number,
  logo_path: string | null,
  name: string,
  origin_country: string
}

export interface ICountries {
  iso_3166_1: string,
  name: string
}

export interface ISpokenLanguage {
  english_name: string,
  iso_639_1: string,
  name: string
}

export interface ICollection {
  id: number,
  name: string,
  poster_path: string | null,
  backdrop_path: string | null
}

export interface IMovieDetails {
  adult: false,
  backdrop_path: string | null,
  belongs_to_collection: ICollection | null,
  budget: number,
  genres: IGenre[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string | null,
  production_companies: ICompanies[],
  production_countries: ICountries[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ISpokenLanguage[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}