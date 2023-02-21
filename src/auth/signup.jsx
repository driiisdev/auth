import React from 'react'

const changeHandler = (e) =>{e.target.value}

const Signup = () => {
  return (
    <form action="">
      <input type="text" name='fullName' value='' placeholder='enter ur full name' onChange={changeHandler} />
      <input type="email" name='email' value="" placeholder='enter ur email address' onChange={changeHandler} />
      <input type="password" name='pwd' value="" placeholder='enter ur password' onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Signup;
