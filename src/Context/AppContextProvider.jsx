import React, { useState } from 'react'
import AppContext from './AppContext'

const AppContextProvider = ({ children }) => {
  const [ctype, setCType] = useState('movie')
  return (
    <div>
      <AppContext.Provider value={{ ctype, setCType }}>
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default AppContextProvider
