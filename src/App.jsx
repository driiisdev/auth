import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from  './pages/home'
import Nav from './components/nav'
import Login from './auth/login'
import Signup from './auth/signup'
import Profile from './components/profile'
import { AuthProvider } from './utils/auth'
import IsProfile from './utils/isProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='signup' element={<Signup />}/>
        <Route path='profile' element={<IsProfile><Profile /></IsProfile>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
