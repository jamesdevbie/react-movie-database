import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../Slice/MovieSlice'

const Store = configureStore({
  reducer: {
    movieList: movieSlice,
  },
})

export default Store
