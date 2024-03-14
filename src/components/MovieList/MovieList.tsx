import { Fragment } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"
import { IMovie } from "../../interfaces/interfaces";
interface IMoviesProps {
  movies: IMovie[]
}
export default function MovieList({ movies }: IMoviesProps) {
  return (
    <div className="movies-list container">
      {
        movies?.map((movie, idx) => (
          <Fragment key={movie.id + `${idx}`}>
            <MovieCard movie={movie} />
          </Fragment>
        ))
      }
    </div>
  )
}
