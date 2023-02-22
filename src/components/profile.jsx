import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';

const Profile = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <>
      <div>
        <h1>hi, {auth.user}</h1>
      </div>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default Profile;
