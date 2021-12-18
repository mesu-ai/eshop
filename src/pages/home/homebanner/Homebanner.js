import React from 'react';
import Container from '@mui/material/Container';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../images/electronic-banner.png';
import img2 from '../../../images/laptop-banner.png';
import img3 from '../../../images/wintersell-banner.png';

const banners=[
    {banner_slide:img1},
    {banner_slide:img2},
    {banner_slide:img3},

]
console.log(banners);

const Homebanner = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
      };

    return (
        <>
        <Slider {...settings} >

            {banners.map(slide=><div key={Math.random()}>
                <img style={{width:'100%',height:'344px'}} src={slide?.banner_slide} alt="" />
            </div>)}
          
        </Slider>
        </>
      
    );
};

export default Homebanner;