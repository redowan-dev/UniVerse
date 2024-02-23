import parse from 'html-react-parser';
import {  AiOutlineDelete,} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import line from "../../../assets/Img/line.png"
import Swal from 'sweetalert2';
import UseBlogs from '../../../hooks/UseBlogs';


const ManageBlogs = () => {
 
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
                  refetch()
                }
              })
              .catch((error) => console.log(error));
          }
        });
      };
    
    return (
        <div>
             <div className='lg:m-5 flex flex-col justify-center items-center'>
         {/* title  */}
         <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Manage all Blogs </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
         
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {blogs.map((blog) => (


<div key={blog._id} className=" c border-sky-500 card w-96 bg-white shadow-xl ">
<figure>
    <img className="w-full h-60 lg:h-80" src={blog.img}  alt="No image" />
 
</figure>
<div className="card-body">
  <h2 className="card-title text-black flex justify-center ">
    {blog?.title}
  </h2>
  <div className="border-y-2 "></div>
  <p className="text-black">{parse(blog.details)}</p>
  <div className="card-actions justify-between">
  <div className="badge badge-secondary">{blog?.name}</div>
  <button
                      onClick={() => handleDelete(blog._id)}
                      className="bg-red-500 px-[12px] py-[10px] rounded-full tooltip"
                      data-tip="Delete Blog"
                    >
                      <AiOutlineDelete className="text-white text-2xl  rounded-full " />
                    </button>
  </div>
</div>
</div>
          ))}
         
      </div>
  
        </div>
        </div>
    );
};

export default ManageBlogs;