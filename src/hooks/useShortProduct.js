import { useEffect, useState } from 'react';

const useShortProduct = () => {
    
     const [shortProducts,setShortProducts]= useState([]);

    useEffect(()=>{
        fetch('https://limitless-fjord-65876.herokuapp.com/products/')
        .then(res=>res.json())
        .then(data=>{
            
             setShortProducts(data.products.slice(-9));
            
        })
    },[]);
   
    // console.log(products);

    return [shortProducts,setShortProducts]
};

export default useShortProduct;