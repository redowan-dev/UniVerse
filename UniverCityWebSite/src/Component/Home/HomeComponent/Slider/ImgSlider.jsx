import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ImgSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function ImgSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://i.ibb.co/XxcDRqD/qzlme54j.png" className='relative'/></SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/SwRH8xS/sl514l14.png" className='relative'/></SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/T1hghN9/grz5jjft.png" className='relative'/></SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/SwRH8xS/sl514l14.png" className='relative'/></SwiperSlide>
       
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
