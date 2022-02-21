import { useState } from 'react';
import { useEffect } from 'react';

const useProducts = () => {
    const [products,setProducts] =useState([]);
    const [displayProducts,setDisplayProducts]=useState([]);

    useEffect(()=>{
        fetch('https://limitless-fjord-65876.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products);
            setDisplayProducts(data.products);
        });
        

    },[products]);

    return [products,setProducts,displayProducts,setDisplayProducts];
};

export default useProducts;