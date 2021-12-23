import React from 'react';
import HotDeals from './hotDeals/HotDeals';
import FlashSales from './flashSales/FlashSales';
import Homebanner from './homebanner/Homebanner';
import QuickLink from './quickLink/QuickLink';
import Categories from './categories/Categories';
import CameraZone from './cameraZone/CameraZone';


const Home = () => {
    return (
        <>
        <div style={{height:'100vh',backgroundColor:'#f5f5f5'}}>
            <Homebanner></Homebanner>
            <QuickLink></QuickLink> 
        </div>
        <FlashSales></FlashSales>
        <HotDeals></HotDeals>
        <Categories></Categories>
        <CameraZone></CameraZone>
        </>

    );
};

export default Home;