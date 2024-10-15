import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = ({ imdbID }) => {
  const { id } = useParams()
  useEffect(() => {
    getData(mainURL)
  }, [])

  const [movieData, setMovieData] = useState('')

  const mainURL = `https://www.omdbapi.com/?apikey=20ee532c&i=${id}`

  const getData = async (URL) => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setMovieData(data)
    } catch (e) {}
  }

  return (
    <div className="bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800 w-[90%] h-[90vh] mx-auto py-8">
      <div className="mt-[8%] w-[80%] flex flex-row items-center bg-yellow-500 border border-gray-200 rounded-lg shadow p-4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
        <img
          className="object-cover w-[400px] rounded-t-lg h-[70%]  md:rounded-none md:rounded-s-lg"
          src={movieData.Poster}
          alt={movieData.Title}
        />
        <div className="flex  flex-col justify-between item-center p-4 leading-normal">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">
            {movieData.Title}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Cast: </span>
            {movieData.Actors}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Director: </span>
            {movieData.Director}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Writers: </span>
            {movieData.Writer}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Plot: </span>
            {movieData.Plot}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Genre: </span>
            {movieData.Genre}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Released: </span>
            {movieData.Released}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Language: </span>
            {movieData.Language}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">IMDB Rating: </span>
            {movieData.imdbRating}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
