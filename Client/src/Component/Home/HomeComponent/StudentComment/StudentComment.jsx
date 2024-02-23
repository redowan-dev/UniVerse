import stu1 from "../../../../assets/Img/avatar.png";
import stu2 from "../../../../assets/Img/avatar3.png";
import stu3 from "../../../../assets/Img/avatar2.png";
import { Link } from "react-router-dom";


const StudentComment = () => {
    return (
      <div className=" flex flex-col justify-center items-center   mx-8   my-20">
       
   
  
        {/* Tropical Adventure */}
        
          <h2 className=" text-4xl text-center">
            <span className="font-bold">UniVerse: <br />
             Empowering Students </span>
          </h2>
           <p className=" font-medium py-5">Student Tropical Vacation: Relax and Recharge</p>
           <ul className=" list-disc text-xl mb-14">
              <li>Supportive Learning Environment: Create an atmosphere that encourages collaboration, inclusivity, and positive engagement</li>
              <li>Resources for Growth: Provide access to academic resources, mentorship programs, and counseling services to support personal and academic development.
</li>
              <li>Skill Empowerment: Foster initiatives that enhance critical thinking, problem-solving, and communication skills.
</li>
              <li>Autonomy: Encourage students to take ownership of their learning journey and make informed decisions regarding their education.
</li>
              <li>Holistic Development: Emphasize a well-rounded approach that addresses not only academic success but also mental, emotional, and social well-being.
</li>
           </ul>
           <Link to={'/about'} className="btn bg-orange-500 font-light text-white text-base rounded-full  px-10">Explore More</Link>
        </div>
   
    );
  };
  
  export default StudentComment;