import React from 'react';
import line from "../../assets/Img/line.png"

import stu1 from '../../assets/Img/stu1.png'
import stu2 from '../../assets/Img/stu2.png'
import stu3 from '../../assets/Img/stu3.png'
import stu4 from '../../assets/Img/stu4.png'
import MentorsCard from '../Home/HomeComponent/MentorsCard/MentorsCard';

const AboutPage = () => {
    return (
        <div className="flex-grow max-w-screen-xl mx-4 lg:mx-auto">

<MentorsCard/>     

       

{/* team member */}

         {/* title  */}
         <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Our Team </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-5 justify-between   max-w-8xl mx-auto mb-12">

{/* card 1*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu1} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] ">Hifjur Rahman Bayezid
</p>
      <p className="text-sm group-hover:text-white dark:text-black">batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>
{/* card 2*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu2} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] ">Redwon Ahmed </p>
      <p className="text-sm group-hover:text-white dark:text-black">batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>
{/* card 3*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu3} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] "> Md. Adibur Rahman</p>
      <p className="text-sm group-hover:text-white dark:text-black">Batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>

{/* card 4*/}

  <div  className="bg-white shadow rounded my-3 overflow-hidden group relative w-80 h-80 mx-auto">
    <img className="w-full h-60 object-cover group-hover:scale-110  duration-700" src={stu4} alt="" />
    <div className="h-[100px]"></div>
    <div className="absolute bottom-[30px] group-hover:mb-[65px] duration-700 text-center z-10 inset-x-0 ">
      <p className="text-xl  font-bold text-[#5A4F24] group-hover:text-[#ffc107] ">Mirza Lutfur Ali Rafi 
</p>
      <p className="text-sm group-hover:text-white dark:text-black">batch -53 sec B
</p>
    </div>

    <div className=" bg-gradient-to-b from-[#2a262691] to-[#2a2c3c]  rounded-t-[40px] duration-700 absolute group-hover:h-[180px] h-0 group-hover:w-full w-0 group-hover:bottom-0 right-0">
    </div>
  </div>



</div>




        </div>

      
    );
};

export default AboutPage;