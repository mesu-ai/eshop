import { useEffect, useState } from 'react';

const useOrders = () => {
    const [orders,setOrders]=useState();
    useEffect(()=>{
        fetch('https://limitless-fjord-65876.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[])
    return [orders,setOrders];
};

export default useOrders;