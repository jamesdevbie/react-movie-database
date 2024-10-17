import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import { FaHome } from 'react-icons/fa'

const NavBar = ({ searchkey, setSearchKey, setError }) => {
  return (
    <div className="fixed w-full">
      <div className="bg-yellow-500 w-[90%] flex items-center justify-center m-auto gap-[20%] py-4 px-4">
        <div onClick={() => window.location.reload()}>
          <Link to={'/'}>
            {' '}
            <img className="w-[100px] h-[100px]" src={logo} alt="logo" />{' '}
          </Link>
        </div>
        <Search
          searchkey={searchkey}
          setSearchKey={setSearchKey}
          setError={setError}
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
