import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseNotice from '../../../hooks/UseNotice';
import JoditEditor from 'jodit-react';

const EditNotice = () => {
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const {noticeData, refetch} = UseNotice();
    const notice = noticeData.find((notice) => notice._id === id);

    const [descriptionValue, setDescriptionValue] = useState(notice?.details);

    useEffect(() => {
      // Fetch existing blog data based on the ID
      fetch(`https://book-your-college-server-copy.vercel.app/notice/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // Populate form fields with existing data
          setValue('title', data.title);
          setValue('img', data.img);
          setValue('details', data.details);
          setValue('email', data.email);
          setValue('name', data.name);
        })
        .catch((error) => console.error('Error fetching blog data:', error));
    }, [id, setValue]);
  
    const onSubmit = (noticeData) => {
      const finalData = {
        title: noticeData.title,
        details: descriptionValue,
        img: noticeData.img,
        email: noticeData.email,
        name: noticeData.name,
       
        
      };
  
      fetch(`https://book-your-college-server-copy.vercel.app/notice/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      })
        .then((response) => response.json())
        .then((data) => {
          (data.updatedCount > 0) 
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Blog Updated',
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/dashboard/mynotice');
       
      
        })
        .catch((error) => console.error(error));
    };

    return (
        <div>
        {/* title  */}
   <div className="text-center mb-12 mt-4">
   <p className="text-[48px] font-alice  dark:text-white">Edit Notice </p>
   {/* <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" /> */}
 
 </div>
         <div className=' max-w-5xl mx-auto'>
 
 <form onSubmit={handleSubmit(onSubmit)} className='px-8 pt-6  pb-8 m-4 bg-white dark:bg-gray-800 rounded' action="">
   {/* input field */}
   <div className='m-4 md:mr-2 md:mb-0'>
     <label htmlFor="blog_title" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Blog Tittle</label>
     <input {...register('title', {required: true})} type="text" id="blog_title" className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline" placeholder="Type Blog title" />
   </div>

{/* input field */}
   <div className='m-4 md:mr-2 md:mb-0'>
     <label htmlFor="img" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Image Link</label>
     <input {...register('img', {required: true})} type="text" id="img" className="w-full px-3 py-2 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline "placeholder="post img in imgbb and paste link here" />
   </div>

   {/* input field */}
   <div className='m-4 md:mr-2 md:mb-0'>
     <label htmlFor="description" className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">Description</label>
     <JoditEditor defaultValue={notice?.details}
    value={descriptionValue}
    onChange={(newContent) => setDescriptionValue(newContent)}
    tabIndex={1}
  />
   </div>
   <button className='text-[20px] font-bold w-[50%] mx-auto bg-blue-500 rounded-full text-white py-[13px]  flex justify-center items-center '>Done</button>
   </form>
</div>
   </div>
    );
};

export default EditNotice;