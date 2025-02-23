import React from 'react'
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        
    };
    return (
        <div>

            <Slider {...settings} className='pt-20'>

                <div>
                    <img className='w-[100%] md:h-[70dvh] h-[60dvh] object-cover object-center' src="https://images.pexels.com/photos/30708203/pexels-photo-30708203/free-photo-of-soju-ve-dekorla-sik-susi-sunumu.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                <div>
                    <img className='w-[100%] md:h-[70dvh] h-[60dvh] object-cover object-center' src="https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </Slider>
        </div>

    )
}

export default SimpleSlider

