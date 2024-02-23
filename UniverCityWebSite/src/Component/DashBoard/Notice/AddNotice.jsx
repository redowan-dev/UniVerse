import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';

import line from "../../../assets/Img/line.png"
import { AuthContext } from '../../../Providers/AuthProvider';
const AddNotice = () => {
    const { user } = useContext(AuthContext);
    const [descriptionValue, setDescriptionValue] = useState("");
    const {register, handleSubmit,formState: { errors }} = useForm();
    const navigate = useNavigate();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    console.log(image_hosting_key);
     const [imgUrl,setImgUrl] =useState()
    const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=1296000&key=${image_hosting_key}`

    const onSubmit = async (noticeData) => {
      try {
          console.log(noticeData, user);
  
          // Step 1: Upload image to ImgBB
          const formData = new FormData();
          formData.append("image", noticeData.img[0]);
         
  
          fetch(image_hosting_api, {
              method: 'POST',
              body: formData,
          })
          .then(res=>res.json())
          .then(imgRes=>{
            if(imgRes.success){
              const imgUrl = imgRes.data.display_url;
              setImgUrl(imgUrl)
            }
            console.log(imgRes.data.display_url);
          })
  
  
          if (imgUrl) {
              // Step 2: If upload successful, construct final data including image URL
              const finalData = {
                  title: noticeData.title,
                  details: descriptionValue,
                  img: imgUrl,
                  name: user.displayName,
                  email: user.email,
              };
  
              console.log("Final data:", finalData);
  
              // Step 3: Post notice data along with image URL
              const postResponse = await fetch('https://book-your-college-server-copy.vercel.app/notice', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(finalData),
              });
  
              const postData = await postResponse.json();
              console.log("Post response:", postData);
  
              if (postData.acknowledged) {
                  Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Notice Published',
                      showConfirmButton: false,
                      timer: 1500,
                  });
                  navigate('/allnotice');
              } else {
                  Swal.fire({
                      position: 'center',
                      icon: 'error',
                      title: 'Failed to add a Notice',
                      showConfirmButton: false,
                      timer: 1500,
                  });
              }
          } else {
              console.error("Failed to upload image to ImgBB");
          }
      } catch (error) {
          console.error(error);
      }
  };
            
    return (
        <div>
              {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Add Notice </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>

        {/* from */}
              <div className='  '>
      
      <form onSubmit={handleSubmit(onSubmit)} className='px-8 pt-6  pb-8 m-4 bg-white dark:bg-gray-800 rounded md:w-[560px]' action="">

        {/* input field */}
        <div className='m-4 md:mr-2 md:mb-0'>
          <label htmlFor="blog_title" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Notice Tittle</label>
          <input {...register('title', {required: true})} type="text" id="blog_title" className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"placeholder="Type Notice title" />
          {errors.title && (
            <span className="text-red-600  rounded-sm ">This field is required</span>
          )}
        </div>

  {/* input field */}
  <div className='m-4 md:mr-2 md:mb-0'>
          <label htmlFor="img" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Upload Image</label>
          <input {...register('img', { required: true })} type="file" className="file-input w-full max-w-xs" /> <br />
          {errors.title && (
            <span className="text-red-600  rounded-sm ">This field is required</span>
          )}
        </div>

        {/* input field */}
        <div className='m-4 md:mr-2 md:mb-0'>
          <label htmlFor="description" className="block mb-2 text-sm font-bold dark:text-white">Description</label>
          <JoditEditor 
    value={descriptionValue}
    onChange={(newContent) => setDescriptionValue(newContent)}
    tabIndex={1}
    className="text-black"

  /><br />
          {errors.title && (
            <span className="text-red-600  rounded-sm ">This field is required</span>
          )}
        </div>
        <button className='text-[20px] font-bold w-[50%] mx-auto bg-blue-500 rounded-full text-white py-[13px]  flex justify-center items-center '>Done</button>
        </form>
</div>
        </div>
    );
};

export default AddNotice;