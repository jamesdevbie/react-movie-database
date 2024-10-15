import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MovieList from '../Components/MovieList'
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5'

const SearchResult = ({ type, setType, searchList, error }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const movies = location.state
  const [searchPage, setSearchPage] = useState(1)
  useEffect(() => {
    setSearchPage(1)
  }, [searchList])

  let perPage = 8
  let movieLength = movies.Search.length
  let pageCount = Math.ceil(movieLength / perPage)
  let pageArray = new Array(pageCount).fill('')

  const handleClick = (e, imdbID) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(`/moviedetails/${imdbID}`)
  }

  const handlePagination = (e, index) => {
    e.preventDefault()
    setSearchPage(index + 1)
  }

  const handlePrevious = () => {
    if (searchPage > 1) {
      setSearchPage(searchPage - 1)
    } else {
      return
    }
  }

  const handleNext = () => {
    if (searchPage < pageCount) {
      setSearchPage(searchPage + 1)
    } else {
      return
    }
  }

  return movies.Response == 'False' ? (
    <h1>True</h1>
  ) : (
    <div className="bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800 w-[90%] mx-auto">
      <div className="pt-[10%] text-white text-right">
        <label className=" font-bold mr-4" htmlFor="type">
          Type:
        </label>
        <select
          className="text-black bg-yellow-500 font-bold mr-4 rounded-md"
          name="type"
          id="type"
          value={type}
          onChange={(e) => {
            e.stopPropagation()
            setType(e.target.value)
          }}
        >
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>
      <div className=" text-white text-center font-bold font-mono text-[3rem]">
        <h1 className="">Hurray, here's your list..! </h1>
      </div>
      <div className=" flex cursor-pointer item-center justify-center flex-1 gap-10 flex-wrap ">
        {movies.Search.slice(
          searchPage * perPage - perPage,
          searchPage * perPage
        ).map((movie) => (
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

export default SearchResult
