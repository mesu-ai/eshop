import { useState } from 'react';
import { useEffect } from 'react';
import { getStoredDb } from '../utilities/LocalStorage';

const useCart = () => {

    const [cart,setCart]=useState([]);
   
    useEffect(()=>{
         
         const storedDb= getStoredDb(); 
         const keys=Object.keys(storedDb);
         console.log(keys);
         
         const newCart=[];

         fetch('https://limitless-fjord-65876.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
           // setProducts(data.products);

           if(data.products.length){

            for(const key in storedDb){

                const addedProducts=data.products.find(product=>product._id===key);

                if(addedProducts){
                    const quentity=storedDb[key];
                    addedProducts.quentity=quentity;
                    newCart.push(addedProducts);
                    
                }       
            }

            setCart(newCart);
        }
        });

       

    },[])
    
    return [cart,setCart];
};

export default useCart;