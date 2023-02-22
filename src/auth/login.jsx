import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Login = () => {
  const [user, setUser] =  useState("");
  const [email, setEmail] =  useState("");
  const [pwd, setPwd] =  useState("");
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location.state?.path || '/'

  const handleLogin = (e) => {
    const {email, pwd} = e.target.elements;
    console.log('data', {email: email.value, pwd: pwd.value});
    auth.login(user)
    navigate(redirectPath, { replace: true })
  }

  useEffect(()=>{
    setUser("Idris");
  },[])

  return (
    <form action="" onSubmit={handleLogin} >
      <input type="email" name='email' value={email} placeholder='enter ur email address' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" name='pwd' value={pwd} placeholder='enter ur password' onChange={(e)=>setPwd(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login;
