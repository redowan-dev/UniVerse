import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UseBlogs from '../../../../hooks/UseBlogs';
import parse from 'html-react-parser';
import line from "../../../../assets/Img/line.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Virtual, Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';




const LatestBlogsSlider = () => {
    const {blogs,refetch} = UseBlogs();
    const [swiperRef, setSwiperRef] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState();

  const updateIndex = () => {
    if (swiperRef !== null) {
      setCurrentIndex(swiperRef.activeIndex);
    }
  };
    const reversedBlogs = [...blogs].reverse();
    return (
        <div>
           <div className="text-center mx-4 lg:mx-0 mb-12 mt-4">
        <p className="text-[48px] font-alice  dark:text-white">
         Latest Blogs{" "}
        </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px] " />
       
      </div>
      <Swiper
       breakpoints={{
        240: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
            modules={[Autoplay,Virtual, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            slidesPerView={3.5}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
             
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onSlideChange={updateIndex}
            onInit={() => setInit(true)}
            virtual
      >
        
        {reversedBlogs.map((blog) => (
    <SwiperSlide className='mx-2 rounded-xl' key={blog._id}>
    <Link to={`/blog/${blog._id}`}>
    <div className="card w-96 h-96 md:h-[484px] shadow-xl">
    <figure className="h-3/5 md:h-3/5 overflow-hidden"> {/* Adjust height as needed */}
        <img className="w-full h-full object-cover p-4" src={blog.img} alt="No image" />
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title text-black">
            {blog?.title}
        </h2>
        <div className="border-y-2"></div>
        <p className="text-black">{parse(blog.details.slice(0, 20))}... <Link to={`/blog/${blog._id}`} className="text-blue-500 text-xs hover:underline">see more</Link></p>
        <div className="card-actions justify-end">
            <div className="badge badge-secondary">{blog?.name}</div>
        </div>
    </div>
</div>


    </Link>
            </SwiperSlide>
))}

       
      </Swiper>

      <div className='flex justify-center items-end text-center'>
<button ref={prevRef} className='mx-8'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <path d="M45 21.0826H5.42659L14.3463 12.1628L12.3418 10.1583L0 22.4999L12.3418 34.8418L14.3463 32.8372L5.42659 23.9175H45V21.0826Z" fill="#262626"/>
</svg></button>

<div className='swiper-pagination flex items-center text-center'><p className='text-3xl'>{currentIndex + 1}</p>  </div>

      <button ref={nextRef} className='mx-8'><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
  <path d="M0 21.0826H39.5734L30.6537 12.1628L32.6582 10.1583L45 22.4999L32.6582 34.8418L30.6537 32.8372L39.5734 23.9175H0V21.0826Z" fill="#F27A44"/>
</svg></button>

</div>
        </div>
    );
};

export default LatestBlogsSlider;