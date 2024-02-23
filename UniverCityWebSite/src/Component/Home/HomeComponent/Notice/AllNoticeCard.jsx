import React, { useEffect, useState } from 'react';
import line from "../../../../assets/Img/line.png"
import parse from 'html-react-parser';
import UseNotice from '../../../../hooks/UseNotice';
import { Link } from 'react-router-dom';
const AllNoticeCard = () => {
  const {noticeData, refetch} = UseNotice();

    const [loading, setLoading] = useState(true);
    console.log(noticeData);
   
    return (
        <div >
           <div className=' mb-4 lg:m-5 flex flex-col justify-center items-center'>
           {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Latest Notice </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {noticeData.map((notice) => (
            <div  key={notice._id} className="flex justify-center">
 <Link to={`/notice/${notice._id}`}   className="max-w-xs mx-4 my-4 bg-blue-800 text-white rounded-lg overflow-hidden shadow-lg">
           
           <div className="card-body items-center text-center">
           <figure><img src={notice?.img} className="w-full h-60 lg:h-80" alt="img" /></figure>
             <h2 className="card-title">{notice?.title}</h2>
             <div className="divider "></div>
             <p>{parse(notice?.details)}</p>
            
           </div>
                     
         </Link>
            </div>
         
        ))}
          </div>
      </div>
        </div>
    );
};

export default AllNoticeCard;