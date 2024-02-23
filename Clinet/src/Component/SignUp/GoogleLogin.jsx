
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from "react-icons/bs";
import {  useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const GoogleLogin = () => {

const {googleSignIn}= useAuth();
const navigate= useNavigate();

    const location = useLocation();
      
    const from = location.state?.from?.pathname || '/'

    const googleLogIn = ()=>{
        googleSignIn()
        .then(result=>{
          const loggedUser= result.user;
          console.log('loggedUser',loggedUser);
          const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            photoURL: loggedUser.photoURL,
            
          } 
          fetch("https://book-your-college-server-copy.vercel.app/users", {
            method: "POST",
            headers: {
          "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
            {
                navigate(from,{replace:true});
              }
            });
        })
 }

  
    return (
        
       

         <div className="m-4 grid space-y-4">
                        <button onClick={googleLogIn} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-red-700 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className=" w-10 bg-white rounded-full p-2 " alt="google logo"/>
                                <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-500 sm:text-base">Continue with Google</span>
                            </div>
                        </button>
                        </div>
       
    );
};

export default GoogleLogin;