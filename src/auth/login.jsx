import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Login = () => {
  const [user, setUser] =  useState("");
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location.state?.path || '/'

  const handleLogin = (e) => {
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }

  return (
    <form action="" >
      <input type="text" name='user' value={user} placeholder='enter ur name' onChange={(e)=>setUser(e.target.value)} required />
      <button type="submit" onClick={handleLogin}>Submit</button>
    </form>
  )
}

export default Login;
