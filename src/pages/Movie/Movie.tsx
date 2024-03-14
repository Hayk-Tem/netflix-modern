import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchData } from '../../functions'
import { IMovie } from '../../interfaces/interfaces'
import CastList from '../../components/CastList/CastList'
import "./Movie.css"
import MovieBanner from '../../components/MovieBanner/MovieBanner'

export default function Movie() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<IMovie | null>(null);
  movie ? document.title = movie.title : null

  useEffect(() => {
    const _movie = fetchData(`movie/${movieId}`);
    const _images = fetchData(`movie/${movieId}/images`);
    const _videos = fetchData(`movie/${movieId}/videos`);
    Promise.all([_movie, _images, _videos])
      .then(([movieData, movieImages, movieVideo]) => {
        setMovie(movieData)
        console.log(movieImages);
        console.log(movieVideo);

      })
  }, [movieId])

  console.log(movie);
  return (
    <div>
      <MovieBanner />
      <div className='cast-track'>
        <CastList />
      </div>
    </div>
  )
}
