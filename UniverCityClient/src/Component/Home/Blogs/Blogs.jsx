import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import line from "../../../assets/Img/line.png"
import { CiCirclePlus } from "react-icons/ci";
import { LiaBlogSolid } from "react-icons/lia";


import UseBlogs from "../../../hooks/UseBlogs";

const Blogs = () => {
  const {blogs,refetch} = UseBlogs();
 
    return (
      <div >
    
        <div className='lg:m-5  flex flex-col justify-center items-center'>
         {/* title  */}
         <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Our Latest Blogs </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        <p className="dark:text-white">Beyond calculations and grades, UniVerse ignites your creativity and amplifies your unique voice through its powerful blog platform. Whether you're a seasoned writer or a budding storyteller,</p>
      
      </div>
          <div className="flex justify-between">
          <Link to='/addblog' className=' m-4  btn glass bg-red-600'> <CiCirclePlus className="text-white text-2xl"/> Add Your Blog</Link>
          <Link to='/myblogs'  className=' m-4  btn glass bg-red-600'><LiaBlogSolid className="text-white text-2xl"/> Your Blog</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {blogs.map((blog) => (

<div key={blog._id}>
<Link to={`/blog/${blog._id}`}  className="max-w-xs mx-4 my-4  overflow-hidden border-sky-500 card w-96 h-96 bg-white shadow-xl ">
<figure>
    <img className="w-full h-60 lg:h-80" src={blog.img}  alt="No image" />
 
</figure>
<div className="card-body">
  <h2 className="card-title text-black flex justify-center ">
    {blog?.title}
  </h2>
  <div className="border-y-2 "></div>
  <p className="text-black">{parse(blog.details.slice(0, 50))}... </p>
  <div className="card-actions justify-end">
  <div className="badge badge-secondary">{blog?.name}</div>
  </div>
</div>
</Link>
</div>


          ))}


          
         
      </div>
  
        </div>

       
      </div>
       
    );
};

export default Blogs;