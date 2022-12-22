import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const AuthLayout = () => {
    return (
        <>
          <Navbar auth={true}/>
          <Outlet/>  
        </>
    );
}

export default AuthLayout;
