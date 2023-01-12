import { useEffect } from 'react';
import { useState } from 'react';

const useCamera = () => {
    const [cameras,setCameras]=useState([]);
    
    useEffect(()=>{
        fetch('https://eserver-app.vercel.app/products?category=camera',{mode:'no-cors'})
        .then(res=>res.json())
        .then(data=>setCameras(data.slice(-9)))

    },[]);





    return [cameras];
};

export default useCamera;