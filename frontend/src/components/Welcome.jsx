import React from 'react';
import { useSelector } from 'react-redux';
import logo from "../logo/web2.jpg"

const Welcome = () => {
  const {user}=useSelector((state => state.auth))
  return (
    <div className='pl-3'>
        <h1 className='title'>Dashboard</h1>
        <h2 className='subtitle'>welcome back to <strong>{user && user.name}</strong></h2>
        
        <img src={logo} alt="logo" width="1000" height="1000"/>
      
    </div>

    
  );
};

export default Welcome;