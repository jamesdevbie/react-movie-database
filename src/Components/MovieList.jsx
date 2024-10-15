import React from 'react'

const MovieList = ({ movie }) => {
  return (
    <div className=" mx-auto bg-yellow-500 rounded-lg py-8 ">
      <div className="">
        <img
          className="w-[300px] h-[400px] rounded-md px-8"
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>
      <div className="mt-[10%]">
        <h2 className=" text-center text-wrap font-bold text-[1.5rem] font-mono  px-[8px] mx-[0] mb-2 tracking-tighter">
          {movie.Title.slice(0, 15)}
        </h2>
        <h3 className="font-bold font-mono px-8 text-center mb-1">
          Released:{' '}
          <span className="ml-[2rem] py-1 px-2 border border-red-500 bg-slate-700 text-white font-bold rounded-md leading-[200%]">
            {movie.Year}
          </span>
        </h3>
        <p className="font-bold font-mono px-8 text-center">
          Genre:{' '}
          <span className="ml-[2rem] py-1 px-2 border border-red-500 bg-slate-700 text-white font-bold rounded-md leading-[200%]">
            {movie.Type}
          </span>
        </p>
      </div>
    </div>
  )
}

export default MovieList
