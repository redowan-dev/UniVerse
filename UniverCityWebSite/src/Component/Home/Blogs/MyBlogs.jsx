import { useContext, } from "react";
import {  AiOutlineDelete, AiOutlineEdit,} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import line from "../../../assets/Img/line.png"
import parse from 'html-react-parser';

import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import UseBlogs from "../../../hooks/UseBlogs";

const MyBlogs = () => {

  

  const {user} = useContext(AuthContext);

console.log(user?.email);

const {blogs,refetch} = UseBlogs();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://book-your-college-server-copy.vercel.app/blogs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: `Blog Deleted`,
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
              location.reload();
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };


    return (
      <div >
    
        <div className='lg:m-5 flex flex-col justify-center items-center'>
         {/* title  */}
         <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">My Posted Blogs </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
          <div className="flex justify-between">
          <Link to='/addblog' className=' m-4  btn glass bg-red-600'>Add Your Blog</Link>
          <Link to='/blogs'  className=' m-4  btn glass bg-red-600'> Your Blog</Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  '>
          {blogs.map((blog) => {
 if (blog?.email === user?.email) {
    console.log(blog);
    return (
<div  key={blog._id} className="card w-96 glass bg-blue-800 text-white ">
<figure><img src={blog?.img} className="w-full h-60 lg:h-80" alt="img" /></figure>
<div className="card-body items-center text-center">
<h2 className="card-title ">{blog?.title}</h2>
<div className="divider"></div>
<p>{parse(blog?.details)}</p>

<div className="flex justify-around">
<button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-500 px-[12px] py-[10px] rounded-full tooltip"
                      data-tip="Delete Blog"
                    >
                      <AiOutlineDelete className="text-white text-2xl  rounded-full " />
                    </button>

                    <Link to={`/editblog/${blog._id}`} className="bg-yellow-500 px-[12px] py-[10px] rounded-full tooltip" data-tip="Edit Blog">
  <AiOutlineEdit className="text-white text-2xl rounded-full" />
</Link>

</div>


<div className="card-actions justify-end">

</div>
</div>
</div>
          
             
);
}

})}
         
      </div>
  
        </div>
      </div>
       
    );
};

export default MyBlogs;