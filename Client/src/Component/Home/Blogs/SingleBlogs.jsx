import React from 'react';
import UseBlogs from '../../../hooks/UseBlogs';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const SingleBlogs = () => {
    const { id } = useParams();
    const {blogs,refetch} = UseBlogs();

    const blog = blogs.find((blog) => blog._id === id);

    return (
        <div>
                <div className="card lg:card-side bg-gray-500 text-white shadow-xl m-4 w">
  <figure><img  src={blog?.img} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title">{blog.title}</h2>
    <p>{parse(blog.details)}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleBlogs;