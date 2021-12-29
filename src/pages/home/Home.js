import React from 'react';
import HotDeals from './hotDeals/HotDeals';
import FlashSales from './flashSales/FlashSales';
import Categories from './categories/Categories';
import CameraZone from './cameraZone/CameraZone';
import HomeViewPort from './homeViewPort/HomeViewPort';


const Home = () => {
    return (
        <>

        <HomeViewPort></HomeViewPort>
        <FlashSales></FlashSales>
        <HotDeals></HotDeals>
        <Categories></Categories>
        <CameraZone></CameraZone>
        </>

    );
};

export default Home;