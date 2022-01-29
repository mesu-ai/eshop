import { Button, Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useFlashSell from '../../../hooks/useFlashSell';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../hotDeals/HotDeals.css';
import FlashSellCard from './card/FlashSellCard';


var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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



const FlashSales = () => {

   const [products]= useFlashSell();


    const countDownDate = new Date("Jan 31, 2022 00:00:00").getTime();
    const setStartDate=new Date("Jan 29, 2022 03:28:00").getTime();
    const currentDate = new Date().getTime();

    const diff=setStartDate-currentDate;
    if(diff<0){

    // Update the count down every 1 second
    const x = setInterval(function() {

    // Get today's date and time
    const today = new Date().getTime();
        
    // Find the distance between now and the count down date
    const distance = countDownDate - today;
        
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="sellTimeId"
    document.getElementById("sellTimeId").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("sellTimeId").innerHTML = "EXPIRED";
        document.getElementById("flashsell").innerHTML = "";
    }
    }, 1000);

    }



    return (
        <Container id="flashsell">
            <Typography style={{textAlign:'start'}} sx={{ color: 'info.main',mt:2 }} variant="h4" gutterBottom component="div">
                Flash Sell
            </Typography>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Box sx={{display:'flex'}}>
                <Typography style={{textAlign:'start'}} sx={{ color: 'warning.main' }} variant="h6" gutterBottom component="div">
                    On Sell Now
                </Typography>
                
                <Typography id="sellTimeId" style={{textAlign:'start',marginLeft:'4vw'}} variant="h5" gutterBottom component="div">
                {/* (time) */}
                </Typography>

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
      


        </Container>

    
    );
};

export default FlashSales;