import React, { useState } from 'react';
import { useEffect } from 'react';

const useProducts = () => {
    const [products,setProducts] =useState([]);
    const [display,setDisplay]=useState([]);

    useEffect(()=>{
        fetch('https://limitless-fjord-65876.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data.products))
        

    },[]);

    return (
        <div>
            
        </div>
    );
};

export default useProducts;