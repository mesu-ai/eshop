import { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders,setOrders]=useState();
    useEffect(()=>{
        fetch('https://eserver-app.vercel.app/orders',{mode:'no-cors'})
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[])
    return [orders,setOrders];
};

export default useOrders;