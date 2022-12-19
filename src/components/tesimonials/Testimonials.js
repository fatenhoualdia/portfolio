import React from "react";
import "./testimonials.css";


import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () => {



  const data = [{
    name: "GoMyCode HackerSpace Gafsa", 
    review:`Full-Stack Js Development`
  },]
  return (
    <section id="certification">
      <h5>Look at my achivements</h5>
      <h2>Certifications</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
  >
      { data.map(({avatar, name, review}, index)=>{  
        return(

          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">
             {review}
            </small>
        </SwiperSlide>
        )
      })}

      
      </Swiper>
    </section>
  );
};

export default Testimonials;