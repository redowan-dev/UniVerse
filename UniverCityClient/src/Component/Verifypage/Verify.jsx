import React from 'react';
import { Link } from 'react-router-dom';

const Verify = () => {
    return (
        <div>
           <div className="hero min-h-screen glass my-10">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Please Check Your Mail Inbox to Verify!
      Search Mail Box By the Name Universe</p>
      <Link to='/' className="btn btn-primary">Done</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Verify;