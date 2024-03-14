/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import Select from "../../customs/Select/Select";
import { useLoaderData } from "react-router";
import { IMovie, IParams } from "../../interfaces/interfaces.d";
import { fetchData } from "../../functions";
import MovieList from "../../components/MovieList/MovieList";
import "./Home.css"
import Pagination from "../../components/Pagination/Pagination";
import Endpoint from "../../utils/endpoints";
import Loading from "../../components/Loading/Loading";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  {/* @ts-expect-error */ }
  const { genres }: { genres: Array<{ id: number, name: string }> } | unknown = useLoaderData();
  const [movies, setMovies] = useState<IMovie[]>([])
  const [config, setConfig] = useState<IParams>({});
  const [curPage, setCurPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [movieId, setMovieId] = useState(null)


  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = Math.round(window.scrollY + window.innerHeight);
      const docScrollHeight = document.scrollingElement?.scrollHeight;
      if (docScrollHeight != null && ((docScrollHeight - scrollHeight) < 300) && !isLoading) {
        console.log(true);
        setCurPage((prev) => {
          return prev + 1
        })
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal
    fetchData(Endpoint.DISCOVER, {
      signal,
      params: {
        ...config,
        page: curPage,
      }
    }).then((data) => {
      setIsLoading(true)
      setMovies([...movies, ...data.results])
      setTotalPages(data.total_pages > 500 ? 500 : data.total_pages)
      const randomMovieId = Math.floor(Math.random() * data.results.length);
      setMovieId(data.results[randomMovieId])
    }).catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
    return () => {
      controller.abort();
    }
  }, [config, curPage])

  return (
    <>
      {
        !movies.length
          ? <Loading />
          : <div className="main-content">
            <Banner movieId={movieId!} />
            {/* <Select genres={genres} config={config} setConfig={setConfig} setCurPage={setCurPage} /> */}
            <MovieList movies={movies} />
            {/* <Pagination curPage={curPage} setCurPage={setCurPage} totalPages={totalPages} /> */}
          </div>
      }
    </>
  )
}