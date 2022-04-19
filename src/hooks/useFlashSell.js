import { useEffect, useState } from 'react';

const useFlashSell = () => {
    
     const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/flashsell')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);
   
    // console.log(products);

    return [products,setProducts]
};

export default useFlashSell;