import React from 'react';
import Login from '../components/Login/Login/Login';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Login></Login>
        </div>
    );
};

export default LoginLayout;