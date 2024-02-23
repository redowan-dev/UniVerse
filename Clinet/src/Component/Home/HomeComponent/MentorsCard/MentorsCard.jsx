import React from 'react';
import line from "../../../../assets/Img/line.png"
import sir from "../../../../assets/Img/sir.png"
const MentorsCard = () => {
    return (
       <div className='flex items-center flex-col'>

        {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Our Honorable Mentor </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
      
    

<div className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row">
  <figure><img className='w-60' src={sir} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-white">Prithwiraj Bhattacharjee</h2>
    <p>Lecturer <br />
Computer Science & Engineering <br />

Contact Information <br />
Cell Phone: 01785043726

</p>
    <div className="card-actions justify-end">
    <p className="">E-mail: prithwiraj_cse@lus.ac.bd </p>
    </div>
  </div>
</div>
       </div>
       
    );
};

export default MentorsCard;