import { Button, Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useFlashSell from '../../../hooks/useFlashSell';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../hotDeals/HotDeals.css';
import ProductCard from '../../products/productCard/ProductCard';
import FlashSellCard from './card/FlashSellCard';


var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
  
        style={{ ...style, display: "block", background: "red" }}
      
        onClick={onClick}
      />
    );
  }


const FlashSales= () => {

    const [products]= useFlashSell();


    const countDownTime = new Date("feb 28, 2022 11:59:59").getTime();
    const setStartTime=new Date("feb 15, 2022 22:20:00").getTime();
    
    const currentTime = new Date().getTime();
   
    let showTime=setStartTime-currentTime;

    const calculateTimeLeft = () => {
    
    // let year = new Date().getFullYear();

    
    // console.log(showTime);
    let difference = countDownTime - currentTime;
    // let difference = +new Date(`10/01/${year}`) - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

   useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={Math.random()}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });



    return (

      <>
      { showTime<0 && timerComponents.length ? 
      <Container id="flashsell">
      <Typography style={{textAlign:'start'}} sx={{ color: 'info.main',mt:2 }} variant="h4" gutterBottom component="div">
          Flash Sell
      </Typography>

      <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{display:'flex'}}>
          <Typography style={{textAlign:'start'}} sx={{ color: 'warning.main' }} variant="h6" gutterBottom component="div">
              On Sell Now
          </Typography>

          
          { showTime<0?

            <Typography sx={{bgcolor: 'error.main',px:2,boxShadow: 2,borderRadius: 1}}  style={{textAlign:'start',marginLeft:'4vw',color:'white'}} variant="h5" gutterBottom component="div">

            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          
            </Typography>:

            <div></div>

          }

          </Box>

      <Button size="small" variant="outlined">Show More</Button>


      </Box>

      <Divider sx={{my:2,backgroundColor:'black'}}/>

      <Box sx={{px:3, py:4}}>

          <Slider {...settings} style={{padding:'5px',borderRadius:'10px'}}>

          { 
          products.map(product=><FlashSellCard key={Math.random()} product={product}></FlashSellCard>)
          }

          </Slider>

      </Box>



      </Container>:
      <Box></Box>

        }
      </>
        

    
    );
};

export default FlashSales;