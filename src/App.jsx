import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from  './pages/home'
import Nav from './components/nav'
import Login from './auth/login'
import Signup from './auth/signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App
