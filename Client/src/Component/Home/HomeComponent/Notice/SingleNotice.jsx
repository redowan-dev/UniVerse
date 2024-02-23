import React from 'react';
import { useParams } from 'react-router-dom';
import UseNotice from '../../../../hooks/UseNotice';
import parse from 'html-react-parser';

const SingleNotice = () => {
    const { id } = useParams();
    const {noticeData,refetch} = UseNotice();
    const notice = noticeData.find((notice) => notice._id === id);

    return (
        <div>
           <div className="card lg:card-side bg-gray-500 text-white shadow-xl m-4 w">
  <figure><img  src={notice?.img} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title">{notice.title}</h2>
    <p>{parse(notice.details)}</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div> 
        </div>
    );
};

export default SingleNotice;