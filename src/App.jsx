import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/header/Header'

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/admin' && location.pathname !== '/Inbox' &&  
      location.pathname !== '/orderSuccess' && <Header />}
      <Outlet />
    </>
  )
}

export default App
