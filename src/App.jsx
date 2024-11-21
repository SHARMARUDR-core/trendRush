import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/header/Header'
import { MyProvider } from './Components/Context-api'

function App() {
  const location = useLocation()
  return (
    <>
    <MyProvider>
      {location.pathname !== '/admin' && location.pathname !== '/Inbox' &&  
      location.pathname !== '/orderSuccess' && <Header />}
      <Outlet />
    </MyProvider>
    </>
  )
}

export default App
