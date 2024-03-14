import { useParams } from "react-router"
import "./MovieBanner.css"
import { CSSProperties, useEffect, useState } from "react";
import { fetchData } from "../../functions";
import { IMovieDetails } from "../../interfaces/interfaces";

export default function MovieBanner() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovieDetails | null>(null)

  useEffect(() => {
    fetchData(`movie/${movieId}`)
      .then((data) => {
        setMovie(data)
      })
  }, [movieId])

  console.log(movie);

  const image: CSSProperties & { "--bg-image": string } = {
    "--bg-image": `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
  }

  return (
    <div className="movie-banner" style={image}>
      <h2>{movie?.budget}</h2>
    </div>
  )
}
