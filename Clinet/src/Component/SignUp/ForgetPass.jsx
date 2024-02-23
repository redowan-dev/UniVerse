
import { sendPasswordResetEmail } from 'firebase/auth';
import { database } from '../../Firebase/FireBase.Config';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';



const ForgetPass = () => {
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(database,emalVal).then(data=>{
            Swal.fire({
                title: "Password Reset",
                text: "Check your Email to Reset Password!",
                icon: "success"
              });
              navigate('/login');
              
        }).catch(err=>{
            alert(err.code)
        })
    }
 

    return (
        <div className="hero min-h-screen  ">
            <form className="card-body glass bg-cover bg-center w-auto"  onSubmit={(e)=>handleSubmit(e)}>
     <div className="form-control ">
     <h2 className='text-2xl font-semibold text-white text-center bg-blue-600 rounded-b-xl'>Enter Email </h2>
       <label className="label">
         <span className="label-text text-white">Email</span>
       </label>
       <input type="email" placeholder="email" 
       name='email'
       className="input input-bordered" />
     </div>
   
     <div className="form-control ">
     <input className="btn  text-white bg-pink-700 hover:bg-blue-600" type="submit" value="Reset pass" />
      
     </div>

    

   
   </form>
        </div>
    );
};

export default ForgetPass;