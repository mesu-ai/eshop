import React from 'react';
import FlashSales from './flashSales/FlashSales';
import Homebanner from './homebanner/Homebanner';
import QuickLink from './quickLink/QuickLink';


const Home = () => {
    return (
        <>
         <div style={{height:'100vh',backgroundColor:'#f5f5f5'}}>
            <Homebanner></Homebanner>
             <QuickLink></QuickLink> 
        </div>
        <FlashSales></FlashSales>
        </>

    );
};

export default Home;