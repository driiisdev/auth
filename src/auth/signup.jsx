import React, { useState } from 'react';


const Signup = () => {

  const [fullName, setFullName] =  useState("")
  const [email, setEmail] =  useState("")
  const [pwd, setPwd] =  useState("")

  return (
    <form action="">
      <input type="text" name='fullName' value={fullName} placeholder='enter ur full name' onChange={(e)=>setFullName(e.target.value)} />
      <input type="email" name='email' value={email} placeholder='enter ur email address' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" name='pwd' value={pwd} placeholder='enter ur password' onChange={(e)=>setPwd(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Signup;
