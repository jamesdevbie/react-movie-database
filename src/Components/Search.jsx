import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = ({ searchkey, setSearchKey, type, setType, setError }) => {
  const [searchList, setSearchList] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setType('movie')
    setSearchKey('')
  }, [])

  useEffect(() => {
    if (searchList.Search) {
      navigate('/searchresult', { state: { ...searchList } })
    }
  }, [searchList])

  const mainURL =
    type == 'movie'
      ? `https://www.omdbapi.com/?apikey=20ee532c&s=${searchkey}&type=movie`
      : `https://www.omdbapi.com/?apikey=20ee532c&s=${searchkey}&type=series`

  useEffect(() => {
    getData(mainURL)
  }, [type])

  const getData = async (URL) => {
    try {
      const response = await fetch(URL)
      const data = await response.json()

      setSearchList(data)
    } catch (e) {
      setError(true)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchKey(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setType('movie')
    getData(mainURL)
  }

  return (
    <div className="w-[50%] relative">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border py-2 px-4  border-2 border-red-500 rounded-md focus:text-red-500 "
          type="text"
          placeholder="Enter to Search"
          value={searchkey}
          onChange={handleSearch}
        />

        <FaSearch
          className=" absolute text-red-500 text-xl top-3 right-3"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default Search
