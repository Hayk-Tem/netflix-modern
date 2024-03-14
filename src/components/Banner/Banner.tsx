import { useEffect, useState } from 'react'
import { fetchData } from '../../functions';
import "./Banner.css";
import { IMovie } from '../../interfaces/interfaces';

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Banner({ movieId }: { movieId: IMovie }) {
  const [backdrops, setBackdrops] = useState<{ file_path: string }[]>([])
  useEffect(() => {
    const fetchBackdrops = async () => {
      const data = await fetchData(`https://api.themoviedb.org/3/movie/${movieId.id}/images`)
      setBackdrops(data.backdrops)
    }
    fetchBackdrops();
  }, [movieId])

  console.log(backdrops);

  return (
    <div className='banner'>
      <img src={`${base_url}${backdrops[0]?.file_path}`} alt="" />
      <div className='banner-info'>
        <h1>{movieId.title}</h1>
      </div>
    </div>
  )
}
