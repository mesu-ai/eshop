import React from 'react';
import Homebanner from './homebanner/Homebanner';
import QuickLink from './quickLink/QuickLink';
import Sales from './sales/Sales';

const Home = () => {
    return (
        
         <div>
            <Homebanner></Homebanner>
             {/* <Sales></Sales> */}
             <QuickLink></QuickLink>
            
        </div>
    );
};

export default Home;