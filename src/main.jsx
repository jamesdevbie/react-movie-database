import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store.jsx'
import AppContextProvider from './Context/AppContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Provider>
)
