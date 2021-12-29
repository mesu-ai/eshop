import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products,setProducts] = useState([]);
    const [display,setDisplay]= useState([]);
    // const [shortProducts,setShortProducts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products/')
        .then(res=>res.json())
        .then(data=>{
            
            // setShortProducts(data.slice(-9));
            setDisplay(data)
            setProducts(data);
            
        })
    },[]);
   
    // console.log(products);

    return [products,setProducts,display,setDisplay]
};

export default useProduct;