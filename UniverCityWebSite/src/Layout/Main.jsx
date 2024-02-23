import React from 'react';
import Header from '../Component/Shared/Header';
import { Outlet } from 'react-router-dom';
import Fotter from '../Component/Shared/Fotter';

const Main = () => {
    return (
        <div >
            <Header/>
            {/* <div className="flex-grow max-w-screen-xl mx-auto">
            
            </div> */}
            <Outlet/>
            <Fotter/>
        </div>
    );
};

export default Main;