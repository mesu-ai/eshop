import { useState } from 'react';
import { useEffect } from 'react';

const useProducts = () => {
    const [products,setProducts] =useState([]);
    const [displayProducts,setDisplayProducts]=useState([]);

    useEffect(()=>{
        fetch('https://eshop-server-green.vercel.app/products',{
            mode:'no-cors',
            headers: {
                "Access-Control-Allow-Origin":'https://eshop-server-green.vercel.app'
          }
        })
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setDisplayProducts(data);
        });
        

    },[products]);

    return [products,setProducts,displayProducts,setDisplayProducts];
};

export default useProducts;