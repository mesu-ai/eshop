import { Grid } from '@mui/material';
import React from 'react';
import useCart from '../../../hooks/useCart';
import { removeFromDb } from '../../../utilities/LocalStorage';
import CartCard from './cartCard/CartCard';

const ProductCart = () => {
    const [cart,setCart]=useCart();
    console.log(cart);

    const handleRemove=(id)=>{
        const remainProduct=cart.filter(product=>product._id!==id);
        setCart(remainProduct);
        removeFromDb(id);
    }

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cart.map(product=><CartCard product={product} handleRemove={handleRemove} key={product._id}></CartCard>)}
        </Grid>
    );
};

export default ProductCart;