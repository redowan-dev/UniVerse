import line from "../../../../assets/Img/line.png"
import gra from "../../../../assets/Img/gra2.jpg"
import gra1 from "../../../../assets/Img/gra3.jpg"



const Gallery = () => {
    return (
        <div>
                    <div className="text-center mb-4 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">Graduate Gallery </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
        <p className="text-[18px] font-lato text-[#3E4A5B] dark:text-gray-200">Check Out Graduation Party</p>
      </div>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    <div className="flex w-1/2 flex-wrap">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://www.bpmcdn.com/f/files/surrey/import/2020-03/21132533_web1_200331-SNE-UniGradCeremonies-grad_1.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://img.freepik.com/free-photo/studio-portrait-funny-excited-joyful-student-girl-with-graduation-certificate_231208-12977.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696550400&semt=ais" />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={gra1} />
      </div>
    </div>
    <div className="flex w-1/2 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src={gra}/>
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://img.freepik.com/premium-photo/feeling-confident-their-future-four-college-graduates-graduation-gowns-standing-close-each-other-smiling_425904-37663.jpg" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-lg object-cover object-center"
          src="https://img.freepik.com/free-vector/happy-graduation-background-with-balloons-confetti_23-2147647866.jpg?w=740&t=st=1697560587~exp=1697561187~hmac=081b46156160065093c6d56ecfd0199cf0d2c8c52d4f7b3535995908eb0ab2b2" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Gallery;