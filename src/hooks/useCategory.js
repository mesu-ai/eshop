import { useState } from 'react';
import { useEffect } from 'react';

const useCategory = (category) => {
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        fetch(`https://limitless-fjord-65876.herokuapp.com/products?category=${category}`)
        .then(res=>res.json())
        .then(data=>setProducts(data.products.slice(-6)))

    },[category]);
    return [products,setProducts]
};

export default useCategory;