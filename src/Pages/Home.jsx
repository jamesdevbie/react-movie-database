import React, { useContext, useEffect, useState } from 'react'
import MovieList from '../Components/MovieList'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../Redux/Slice/MovieSlice'
import { Link, useNavigate } from 'react-router-dom'
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'
import AppContext from '../Context/AppContext'

const Home = ({ setSearchKey}) => {
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movieList)
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  const { ctype, setCType } = useContext(AppContext)

  useEffect(() => setCType('movie'), [])

  const mainURL = `https://www.omdbapi.com/?apikey=20ee532c&s=man&type=${ctype}`

  let perPage = 8
  let movieLength = movies.movies.length
  let pageCount = Math.ceil(movieLength / perPage)
  let pageArray = new Array(pageCount).fill('')

  useEffect(() => {
    setSearchKey('')

    setPage(1)
    if (movies.movies.length == 0) {
      getData(mainURL)
    }
  }, [])

  useEffect(() => {
    getData(mainURL)
  }, [ctype])

  const getData = async (URL) => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      dispatch(setMovies(data.Search))
    } catch (error) {
      setError(true)
    }
  }

  const handleClick = (e, imdbID) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/moviedetails/${imdbID}`)
  }

  const handlePagination = (e, index) => {
    e.preventDefault()
    setPage(index + 1)
  }

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1)
    } else {
      return
    }
  }

  const handleNext = () => {
    if (page < pageCount) {
      setPage(page + 1)
    } else {
      return
    }
  }

  return error ? (
    <div className="text-yellow-500 bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800 w-[90%] mx-auto min-h-[100vh]">
      <div className="flex flex-col justify-center items-center">
        {' '}
        <h1 className="pt-[25%] font-bold text-[3rem] mb-[2rem]">
          Got some Issue, please try again later
        </h1>
        <p className="font-bold text-[1.5rem] bg-black tracking-[0.5rem]">
          Contact us at:{' '}
          <a className="" href="mailto:customercare@jmdb.com">
            customercare@jmdb.com
          </a>
        </p>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800 w-[90%] mx-auto min-h-full">
      <div className="pt-[10%] text-white text-right">
        <label className=" font-bold mr-4" htmlFor="type">
          Type:
        </label>
        <select
          className="text-black bg-yellow-500 font-bold mr-4 rounded-md"
          name="type"
          id="type"
          value={ctype}
          onChange={(e) => {
            e.stopPropagation()
            setCType(e.target.value)
          }}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>

      <div className="text-white text-center font-bold font-mono text-[3rem]">
        <h1>One Stop Movie Database</h1>
      </div>
      <div className=" flex cursor-pointer item-center justify-center flex-1 gap-10 flex-wrap ">
        {movies.movies
          .slice(page * perPage - perPage, page * perPage)
          .map((movie) => (
            <div
              className="text-black py-8"
              key={movie.imdbID}
              onClick={(e) => handleClick(e, movie.imdbID)}
            >
              <MovieList movie={movie} />
            </div>
          ))}
      </div>
      {pageCount > 1 ? (
        <div className="flex items-center justify-center gap-6">
          <IoArrowBackCircle
            className="cursor-pointer text-yellow-500 text-[2rem] -mb-[-15px]"
            onClick={handlePrevious}
          />
          <div className="page flex item-center justify-center text-white pb-5 gap-1">
            {pageArray.map((pg, index) => (
              <p
                key={index}
                className="cursor-pointer px-3 py-2 border border-3 border-yellow-500"
                onClick={(e) => handlePagination(e, index)}
              >
                {index + 1}
              </p>
            ))}
          </div>
          <IoArrowForwardCircle
            className="cursor-pointer text-yellow-500 text-[2rem] -mb-[-15px]"
            onClick={handleNext}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Home
