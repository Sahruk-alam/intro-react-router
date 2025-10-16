import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../header/Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './rootCss/RootCss.css'
const Root = () => {
    return (
        <div >
            <Header> </Header>
            <div className='root'>
                <SideBar></SideBar>
               <Outlet> </Outlet> 
            </div>           
            <Footer></Footer>
        </div>
    );
};

export default Root;