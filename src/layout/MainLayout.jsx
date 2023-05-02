import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import Home from '../components/Home/Home/Home';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            
            <Outlet></Outlet>


            <Footer></Footer>
        </div>
    );
};

export default MainLayout;