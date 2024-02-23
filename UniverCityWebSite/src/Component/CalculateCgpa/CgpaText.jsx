import React from 'react';
import CGPACalculator from './Cgpa';
import cgpaPoint from "../../assets/Img/cgpaList.png";

import line from "../../assets/Img/line.png";
import LatestBlogsSlider from '../Home/HomeComponent/LatestBlogsSlider/LatestBlogsSlider';
import ExpectedCgpa from './ExpectedCgpa';

const CgpaText = () => {
   
    return (
        <div className="flex-grow max-w-screen-xl mx-4 lg:mx-auto">
             <div className="text-center mx-4 lg:mx-0 mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">
        Many students have a question that how to use the CGPA Calculator?{" "}
        </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
<div className="flex flex-col justify-center items-center gap-5 m-4 text-white    ">
<div className="overflow-x-auto w-4/6 		  h-4/6">
  <table className="table  table-zebra">
    {/* head */}
    <thead className='text'>
      <tr>
        <th></th>
        <th className='text-white font-serif'>Number</th>
        <th className='text-white font-serif'>Grade</th>
        <th className='text-white font-serif'>point</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>80% and above</td>
        <td>A+</td>
        <td>4.00</td>
      </tr>
      {/* row 2 */}
      <tr >
        <th>2</th>
        <td>75% to less than 80%</td>
        <td>A</td>
        <td>3.75</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>70% to less than 75%</td>
        <td>A-</td>
        <td>3.50</td>
      </tr>
      {/* row 4 */}
      <tr>
        <th>4</th>
        <td>65% to less than 70% </td>
        <td>B+</td>
        <td>3.00</td>
      </tr>
      {/* row 5 */}
      <tr>
        <th>5</th>
        <td>60% to less than 65% </td>
        <td>B-</td>
        <td>2.75</td>
      </tr>
      {/* row 6 */}
      <tr>
        <th>6</th>
        <td>55% to less than 60%</td>
        <td>c+</td>
        <td>2.50</td>
      </tr>
      {/* row 7 */}
      <tr>
        <th>7</th>
        <td>50% to less than 55%</td>
        <td>c</td>
        <td>2.25</td>
      </tr>
      {/* row 8 */}
      <tr>
        <th>8</th>
        <td>45% to less than 50%</td>
        <td>D</td>
        <td>2.00</td>
      </tr>
      {/* row 9 */}
      <tr className='bg-red-500'>
        <th>9</th>
        <td>40% Less than 40%</td>
        <td>F</td>
        <td>0.00</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
      </div>
     
<CGPACalculator/>

<ExpectedCgpa/>




    
        <p className="text-2xl lg:text-5xl">
          Many students have a question that how to use the CGPA Calculator?
         
        </p>

     
        {/* <img src={cgpaPoint} alt="Point Table" className="w-4/6 		  h-4/6" /> */}
       
      </div>
 
       
    );
};

export default CgpaText;