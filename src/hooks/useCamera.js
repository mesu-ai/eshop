import { useEffect } from 'react';
import { useState } from 'react';

const useCamera = () => {
    const [cameras,setCameras]=useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/products?category=camera')
        .then(res=>res.json())
        .then(data=>setCameras(data.products.slice(-9)))

    },[]);





    return [cameras];
};

export default useCamera;