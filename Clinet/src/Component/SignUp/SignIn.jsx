
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import GoogleLogin from './GoogleLogin';
import { sendEmailVerification } from 'firebase/auth';


const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {createUser,updateUser}= useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(errorMessage);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("pass");

  const onSubmit = (data) => {
    createUser(data.email, data.pass)
    .then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);

      updateUser(data.name, )
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
           
            
          };
          fetch("https://book-your-college-server-copy.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
               
                emailVerification(loggedUser);
                navigate(from, { replace: true });
              }
            });
            
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            // User already exists
            setErrorMessage("Email address is already in use. Please use a different email.");
          } else {
            setErrorMessage("An error occurred while signing up. Please try again later.");
          }
          console.error("User data update failed", error);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        // User already exists
        setErrorMessage("Email address is already in use. Please use a different email.");
      } else {
        setErrorMessage("An error occurred while signing up. Please try again later.");
      }
      console.error("User creation failed", error);
    });
    
  };

  const emailVerification = (user)=>{
               sendEmailVerification(user)
               .then(result=>{
                console.log(result);
                Swal.fire(
                  'Check Your Email to verify',
                  'Signup Done!',
                  'success'
                )
               })
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
       <div className="hero min-h-screen  ">
      <form
        className="card-body     w-auto rounded-xl glass bg-cover bg-center "
        onSubmit={handleSubmit(onSubmit)}
        
      >
        <div className="form-control ">
          <h2 className="text-2xl font-semibold text-white text-center bg-blue-600 rounded-b-xl">
            Please SignUp
          </h2>
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            {...register("name", { required: true })}
            className="input input-bordered"
          />
        </div>

        <div className="form-control ">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            {...register("email", { required: true })}
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}
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
            {...register("pass", {
              required: true,
              minLength: 6,
              maxLength: 16,

              
              // pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/ ,
            })}
            className="text-md block px-3 py-2 rounded-lg w-full 
            input input-bordered"
          />
           <button
              type="button"
              className="absolute inset-y-0 right-0 px-2 py-1.5"
              onClick={handleTogglePassword}
            >{showPassword ? '🙈' : '👁️'}
            </button>
            </div>

          {errors.pass?.type === "required" && (
            <p className="text-red-600 bg-white m-2">First name is required</p>
          )}
          {errors.pass?.type === "minLength" && (
            <p className="text-red-600 bg-white m-2">Minimum 6 character required</p>
          )}
          {errors.pass?.type === "maxLength" && (
            <p className="text-red-600 bg-white m-2">maximum character should be under 20</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white ">Confirm Password</span>
          </label>
          <div className=' relative'>
          <input
           type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            name="Confirmpass"
            {...register("confirmpass", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="text-md block px-3 py-2 rounded-lg w-full 
            input input-bordered"
          />
           <button
              type="button"
              className="absolute inset-y-0 right-0 px-2 py-1.5"
              onClick={handleTogglePassword}
            >{showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          
          {errors.confirmpass?.type === "required" && (
            <p className="text-red-600 bg-white m-2">Confirm Password is required</p>
          )}
          {errors.confirmpass?.type === "validate" && (
            <p className="text-red-600 m-2 bg-white">{errors.confirmpass.message}</p>
          )}
           {errorMessage && <p className="text-red-600 p-2 rounded bg-white m-2">{errorMessage}</p>}
        </div>
        
        <div>
    <GoogleLogin/>
    </div>
      
        <div className="form-control ">
          <input
            className="btn  text-white bg-pink-700 hover:bg-blue-600"
            type="submit"
            value="SignUp"
          />
          <label className="label">
            <Link
              to="/login"
              className="label-text-alt link link-hover text-white"
            >
              Already Have Account? Login
            </Link>
          </label>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignIn;