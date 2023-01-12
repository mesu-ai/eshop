import { useState } from 'react';
import { useEffect } from 'react';

const useCategory = (category) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://eserver-app.vercel.app/products?category=${category}`, {
            mode: 'no-cors',
            headers: {
                "Access-Control-Allow-Origin": 'https://eserver-app.vercel.app'
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data.slice(-6)))

    }, [category]);
    return [products, setProducts]
};

export default useCategory;