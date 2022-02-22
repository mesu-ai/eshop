import { useState } from 'react';
import { useEffect } from 'react';
import { getStoredDb } from '../utilities/LocalStorage';

const useCart = () => {

    const [cart,setCart]=useState([]);
   
    useEffect(()=>{
         
         const storedDb= getStoredDb(); 
         console.log(storedDb);

         let url;

         storedDb.forEach(element => {
             console.log(element.product_type);
             if(element.product_type==='regular'){
                 url='https://limitless-fjord-65876.herokuapp.com/products';
             }
             else if(element.product_type==='flashsell'){
                url='https://limitless-fjord-65876.herokuapp.com/flashsell';

             }
             
         });

        //  const keys=Object.keys(storedDb);
        // console.log(keys);
         
         const newCart=[];

         fetch(url)
        .then(res=>res.json())
        .then(data=>{
           // setProducts(data.products);

        //    console.log(data.products.length);

           if(data.products.length){

            for (const iterator of storedDb) {

                const addedProducts=data.products.find(product=>product._id===iterator.product_id);

                if(addedProducts){
                    const quentity=iterator.product_qty;
                    const productType=iterator.product_type;
                    addedProducts.quentity=quentity;
                    addedProducts.productType=productType;

                    newCart.push(addedProducts);


                }


                console.log(addedProducts);
                
            }

            // for(const key in storedDb){
            //     console.log(key);

            //     const addedProducts=data.products.find(product=>product._id===key);

            //     if(addedProducts){
            //         const quentity=storedDb[key];
            //         addedProducts.quentity=quentity;
            //         newCart.push(addedProducts);
                    
            //     }       
            // }

            setCart(newCart);
        }
        });

       

    },[])
    
    return [cart,setCart];
};

export default useCart;