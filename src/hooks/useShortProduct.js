import { useEffect, useState } from 'react';

const useShortProduct = () => {
    
     const [shortProducts,setShortProducts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products/')
        .then(res=>res.json())
        .then(data=>{
            
             setShortProducts(data.slice(-9));
            
        })
    },[]);
   
    // console.log(products);

    return [shortProducts,setShortProducts]
};

export default useShortProduct;