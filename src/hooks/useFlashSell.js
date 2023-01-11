import { useTransition } from 'react';
import { useEffect, useState } from 'react';

const useFlashSell = () => {
    
    const [isPending,startTransition]=useTransition(); 
    const [products,setProducts]= useState([]);


    useEffect(()=>{
        fetch('https://eshop-server-green.vercel.app/flashsell')
        .then(res=>res.json())
        .then(data=>{
            startTransition(()=>{
                setProducts(data);

            })
            
        })

    },[]);
   
    // console.log(products);

    return [startTransition,isPending,products,setProducts]
};

export default useFlashSell;