import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import NavBar from './Components/NavBar'
import SearchResult from './Pages/SearchResult'

const App = () => {
  const [searchkey, setSearchKey] = useState('')
  const [searchList, setSearchList] = useState('')
  const [error, setError] = useState(false)

  return (
    <div>
      <BrowserRouter>
        <NavBar
          searchkey={searchkey}
          setSearchKey={setSearchKey}
          setError={setError}
        />
        <Routes>
          <Route path="/" element={<Home setSearchKey={setSearchKey} />} />
          <Route path="moviedetails/:id" element={<MovieDetails />} />

          <Route
            path="searchresult"
            element={<SearchResult searchList={searchList} error={error} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
