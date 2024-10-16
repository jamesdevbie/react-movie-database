import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import AppContext from '../Context/AppContext'

const Search = ({ searchkey, setSearchKey, setError }) => {
  const [searchList, setSearchList] = useState('')
  const navigate = useNavigate()

  const { ctype, setCType } = useContext(AppContext)

  useEffect(() => {
    setCType('movie')
    setSearchKey('')
  }, [])

  useEffect(() => {
    if (searchList.Search) {
      navigate('/searchresult', { state: { ...searchList } })
    } else if (searchList.Response === 'False') {
      alert('No Such Data Exist')
    }
  }, [searchList])

  const mainURL = `https://www.omdbapi.com/?apikey=20ee532c&s=${searchkey}&type=${ctype}`

  useEffect(() => {
    getData(mainURL)
  }, [ctype])

  const getData = async (URL) => {
    if (searchkey)
      try {
        const response = await fetch(URL)
        const data = await response.json()
        setSearchList(data)

        // if (data.Response === 'True') {
        //   setSearchList(data)
        // }
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
