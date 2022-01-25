import { useEffect, useState } from 'react';

const useProduct = (page) => {

    const [products,setProducts] = useState([]);
    // const [display,setDisplay]= useState([]);
    const [totalPage,setTotalPage]= useState(0);
    
    const size=9;

    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            
            // setShortProducts(data.slice(-9));
            // setDisplay(data)
            setProducts(data.products);
            const count=data.count;
            const pageNumber=Math.ceil(count/size);
            setTotalPage(pageNumber);
            
        })
    },[page,setTotalPage]);
   
     console.log(totalPage);

    return [products,setProducts,totalPage,setTotalPage]
};

export default useProduct;