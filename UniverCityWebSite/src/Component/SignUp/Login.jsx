
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import GoogleLogin from "./GoogleLogin";
import { useState } from "react";


const Login = () => {

  const navigate= useNavigate();
  const location = useLocation(); 
  const from = location.state?.from?.pathname || '/'
   const {logIn} = useContext(AuthContext);
   const [errorMessage, setErrorMessage] = useState('');

  const handleLogin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
    console.log(email,password);

    logIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      Swal.fire(
        'Good job!',
        'Login Done!',
        'success'
      )
      navigate(from,{replace:true});
    })
    .catch(error => {
      console.error(error);

      setErrorMessage('Invalid email or password. Please try again!');
    });
};

const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
            <div className="hero min-h-screen  ">

         
<form onSubmit={handleLogin} className="card-body glass bg-cover bg-center w-auto"  >
     <div className="form-control ">
     <h2 className='text-2xl font-semibold text-white text-center bg-blue-600 rounded-b-xl'>Please LOGIN</h2>
       <label className="label">
         <span className="label-text text-white">Email</span>
       </label>
       <input type="email" placeholder="email" 
       name='email'
       className="input input-bordered" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-white">Password</span>
       </label>
       <div className="relative">
       <input
              type={showPassword ? 'text' : 'password'}
              placeholder="password"
              name="pass"
              className="text-md block px-3 py-2 rounded-lg w-full 
              input input-bordered "
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-2 py-1.5"
              onClick={handleTogglePassword}
            >{showPassword ? '🙈' : '👁️'}
            </button>
            </div>

         {errorMessage && <p className="bg-white rounded p-2 m-2 text-red-500">{errorMessage}</p>}
     </div>
     <div className="form-control ">
     <input className="btn  text-white bg-pink-700 hover:bg-blue-600" type="submit" value="Login" />
      
     </div>

     <p className="flex justify-between">
         <Link to="/signin" className="label-text-alt link link-hover text-white">Don't Have Account? SignUp</Link>
         <span><Link to='/forgetpass' className="text-red-500 link-hover">forget pass?</Link></span>
       </p>
     <div>
    <GoogleLogin/>
    </div>
   </form>
   
   </div>

   
    </div>
  );
};

export default Login;