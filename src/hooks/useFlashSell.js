import { useEffect, useState } from 'react';

const useFlashSell = () => {
    
     const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://mysterious-basin-77883.herokuapp.com/flashsell')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);
   
    // console.log(products);

    return [products,setProducts]
};

export default useFlashSell;