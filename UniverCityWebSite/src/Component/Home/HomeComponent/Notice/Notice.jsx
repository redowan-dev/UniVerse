
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BsArrowBarLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import UseNotice from "../../../../hooks/UseNotice";

const Notice = () => {
    const {noticeData, refetch} = UseNotice();

    const [loading, setLoading] = useState(true);

    console.log(noticeData);
    
    return (
        <div className="  bg-red-200 flex text-black">
          <p className="bg-red-500 text-xs text-white p-2 rounded">Latest Notice:</p>
          
              <Marquee >{noticeData.map((notice) => ( 
   <Link to={`/notice/${notice._id}`}  key={notice._id} className="mx-4 flex items-center hover:text-blue-600"> <span className="mx-2">{notice?.title}</span>|</Link>
   ))}
  
  </Marquee>
 
        </div>
    );
};

export default Notice;