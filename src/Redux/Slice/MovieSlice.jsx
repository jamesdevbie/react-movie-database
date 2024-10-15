import { createSlice } from '@reduxjs/toolkit'

const initialState = { movies: [] }

const MovieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
  },
})

export const { setMovies } = MovieSlice.actions
export default MovieSlice.reducer
