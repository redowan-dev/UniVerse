import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {  FaHome, FaUsers } from "react-icons/fa";
import { CgProfile} from "react-icons/cg";
import { BsCardChecklist, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiFillFileAdd } from 'react-icons/ai';
import { useState, } from 'react';

const DashBoard = () => {

  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById('my-drawer-2');
    if (drawerCheckbox && drawerCheckbox.checked) {
      drawerCheckbox.checked = false;
    }
  };

    return (
      <div className="drawer lg:drawer-open z-10">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden justify-start z-10"
         
        >
          <BsFillArrowLeftCircleFill className='text-xl'/>
        </label>
  
        {/* Outlet */}
        <Outlet />
      </div>
  
      <div className="drawer-side">
        <label htmlFor="my-drawer-2"  className="drawer-overlay" onClick={closeDrawer}></label>
        <ul className='menu p-4 w-80 h-full bg-gray-700 text-base-content $'>
          <p className='text-red-600 text-3xl font-bold text-center'>UniVerse</p>
          {/* Sidebar content here */}
          <div className="divider"></div>
  
          <li >
            <Link to="/" onClick={closeDrawer} className="text-xl font-semibold">
              <FaHome /> Home
            </Link>
          </li>
          <li >
            <Link to="profile" onClick={closeDrawer} className="text-xl font-semibold">
              <CgProfile /> Profile
            </Link>
          </li>
          <li >
            <Link to="addnotice" onClick={closeDrawer} className="text-xl font-semibold">
              <AiFillFileAdd />
              Add Notice
            </Link>
          </li>
          <li >
            <Link to="mynotice" onClick={closeDrawer} className="text-xl font-semibold">
              <BsCardChecklist />
              My Notice
            </Link>
          </li>
          <li >
            <Link to="alluser" onClick={closeDrawer} className="text-xl font-semibold">
              <FaUsers />
              All User
            </Link>
          </li>
          <li >
            <Link to="manageblogs" onClick={closeDrawer} className="text-xl font-semibold">
              <FaUsers />
             Manage Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default DashBoard;