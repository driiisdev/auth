import React from 'react';

const Login = () => {
  return (
    <form action="">
      <input type="email" name='email' value="" placeholder='enter ur email address' onChange={changeHandler} />
      <input type="password" name='pwd' value="" placeholder='enter ur password' onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login;