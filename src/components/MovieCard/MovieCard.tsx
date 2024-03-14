import { useNavigate } from "react-router";
import { IMovie } from "../../interfaces/interfaces"
import { voteAverage } from "../../utils/functions"
import "./MovieCard.css"
import { CSSProperties } from "react";
interface IMovieProps {
  movie: IMovie
}
const base_url = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard({ movie }: IMovieProps) {
  const vote_average = voteAverage(movie.vote_average);
  const navigate = useNavigate();
  const release_date = new Date(movie.release_date).toDateString().split(" ").slice(1).join(" ");
  let color = "#ffb52d";
  let opacity = "#ffb52d60";
  switch (true) {
    case vote_average > 70:
      color = "#3bd25d";
      opacity = "#3bd25d60";
      break;
    case vote_average < 50:
      color = "#fc4168";
      opacity = "#fc416860";
      break;
  }
  const vote_style: CSSProperties & { "--color-percentage": string, "--vote-average": string, "--color-percopacity": string } = {
    "--color-percentage": color,
    "--vote-average": `${vote_average}%`,
    "--color-percopacity": opacity
  };
  return (
    <div className="movie-item" onClick={() => {
      navigate(`movie/${movie.id}`)
    }}>
      <div className="img_box">
        <img
          key={movie.id}
          src={`${base_url}${movie?.poster_path}`}
          loading="lazy"
          alt={movie?.title}
        />
        <div className={vote_average ? "vote_average load" : "vote_average"}
          style={vote_style}>
          <div className="_content">
            <span>{`${vote_average}%`}</span>
          </div>
        </div>
      </div>
      <div className="item-content">
        <h3 className="_title">{movie.title}</h3>
        <p className="_date">{release_date}</p>
      </div>
    </div >
  )
}
