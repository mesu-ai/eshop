import { Box } from '@mui/system';
import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';




const ProductDetails = () => {

   const {id}= useParams();
   
   


 

    return (
        <div>
            <p>product id: {id}</p>


            
        </div>
    );
};

export default ProductDetails;



