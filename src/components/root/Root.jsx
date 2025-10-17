import React from 'react';
import Header from '../header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../header/Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './rootCss/RootCss.css'
const Root = () => {
    const navigation=useNavigation();
    const isNavigation=Boolean(navigation.location);
    return (
        <div >
            <Header> </Header>
            <div className='root'>
                <SideBar></SideBar>
                {
                    isNavigation && <h2>Loading...</h2>
                }
               <Outlet> </Outlet> 
            </div>           
            <Footer></Footer>
        </div>
    );
};

export default Root;