import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { BiSolidLogInCircle   } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
   
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userData, setuserData] = useState([]);
    console.log(userData);
    const [loading, setLoading] = useState(true);
  
    const handleLogout = () => {
        logOut()
          .then()
          .catch((error) => console.log(error));
      };

      useEffect(() => {
 

        fetch("https://book-your-college-server-copy.vercel.app/users")
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            setuserData(data);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
            setLoading(false);
            // Handle the error or set userData to a default value (e.g., [])
            setuserData([]);
          });
      }, []);

      
      const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      const handleLinkClick = () => {
        setIsMenuOpen(false);
      };
    
   

    return (
        <div>
            <div className="navbar bg-gradient-to-r from-gray-400 via-transparent to-indigo-300">
            <div className="navbar-start ">
              
    {/* Small menu for mobile */}
    <div className="dropdown lg:hidden" style={{ position: 'relative', zIndex: 2 }}>
            <label tabIndex={0} className="btn btn-ghost btn-circle" onClick={handleToggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
      <li className='mx-2 ' onClick={handleLinkClick}><Link to='/' >Home</Link></li>
    <li className='mx-2' onClick={handleLinkClick}><Link to='/blogs'>Blogs</Link></li>
        <li className='mx-2' onClick={handleLinkClick}><Link to='/cgpa'>CGPA Calculator</Link></li>
        <li className='mx-2' onClick={handleLinkClick}><Link to='/allnotice'>Notice</Link></li>
        <li className='mx-2' onClick={handleLinkClick}><Link to='/about'>About</Link></li>
        {userData.map((userDataItem, index) => {
        if (userDataItem.email === user?.email && userDataItem?.role) {
          return (
            <li className='mx-2' key={index} onClick={handleLinkClick}>
              <Link to="/dashboard/profile" >
                Dashboard
              </Link>
            </li>
          );
        }
        return null;
      })}
      </ul>
    </div>
  
    <Link to="/" className=" text-white normal-case text-xl">UniVerse </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    <li><Link to='/' className=' text-sm font-bold text-white'>Home</Link></li>
    <li><Link to='/blogs' className=' text-sm font-bold text-white'>Blogs</Link></li>
        <li><Link to='/cgpa' className=' text-sm font-bold text-white'>CGPA Calculator</Link></li>
        <li><Link to='/allnotice' className=' text-sm font-bold text-white'>Notice</Link></li>
        <li><Link to='/about' className=' text-sm font-bold text-white'>About</Link></li>
        {userData.map((userDataItem, index) => {
        if (userDataItem.email === user?.email && userDataItem?.role) {
          return (
            <li key={index}>
              <Link to="/dashboard/profile" className=' text-sm font-bold text-white'>
                Dashboard
              </Link>
            </li>
          );
        }
        return null;
      })}
 
    </ul>
  </div>

 
  
 

  <div className="navbar-end ">
    {user ? (
            <>
             
  {user?.photoURL ? (
  
    <div className="  rounded-full hidden md:inline">
       <Link to='/profile' className=" rounded-full  text-center"> <img src={user.photoURL} className='w-10 rounded-full' alt="User Avatar" /></Link>
   
    </div>
  ) : (
    <div>
    
    </div>
  )}


              <Link to='/profile' className="mx-4 text-center"><span >{user.displayName}</span></Link>
              <button
                onClick={handleLogout}
                className="btn glass  bg-red-500 hover:bg-red-700 text-white"
              >
                <IoMdLogOut  className="text-2xl" />
                <span className="hidden md:inline">LogOut</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn glass bg-blue-500 hover:bg-blue-700  text-white"
            >
              Login <BiSolidLogInCircle className="text-2xl" />
            </Link>
          )}
  </div>
</div>
        </div>
    );
};

export default Header;