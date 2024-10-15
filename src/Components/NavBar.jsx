import React, { useEffect } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import { FaHome } from 'react-icons/fa'

const NavBar = ({ searchkey, setSearchKey, type, setError, setType }) => {
  return (
    <div className="fixed w-full">
      <div className="bg-yellow-500 w-[90%] flex items-center justify-center m-auto gap-[20%] py-4 px-4">
        <div>
          <Link to={'/'}>
            {' '}
            <img className="w-[100px] h-[100px]" src={logo} alt="logo" />{' '}
          </Link>
        </div>
        <Search
          searchkey={searchkey}
          setSearchKey={setSearchKey}
          type={type}
          setError={setError}
          setType={setType}
        />

        <div>
          <Link to={'/'}>
            <FaHome className="text-red-800 text-[40px]" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
