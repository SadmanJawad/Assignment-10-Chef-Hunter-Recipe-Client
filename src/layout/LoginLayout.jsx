import React from 'react';
import Login from '../components/Login/Login/Login';
import { Outlet } from 'react-router-dom';
import Register from '../components/Login/Register/Register';

const LoginLayout = () => {
    return (
        <div>
            <Login></Login>
            <Register>  </Register>
        </div>
    );
};

export default LoginLayout;