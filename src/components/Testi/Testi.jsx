import React from 'react';
import { Data } from "./Data.jsx";
import "./testi.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testi = () => {
    return (
        <section className="testi container section" id='testi'>
            <h2 className="section__title" >My Client Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper
                className="testi__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{ clickable: true }}
                breakpoints={{
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 2, spaceBetween: 48 },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => (
                    <SwiperSlide className='testi__card' key={id}>
                        <img src={image} alt="" className='testi__img' />
                        <h3 className="testi__name">{title}</h3>
                        <p className="testi__description">{description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testi;
