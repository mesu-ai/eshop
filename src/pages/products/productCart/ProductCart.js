import { Grid } from '@mui/material';
import React from 'react';

import CartCard from './cartCard/CartCard';

const ProductCart = ({cart,handleRemove}) => {
    // const [cart,setCart]=useCart();
    // console.log(cart);

    

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cart.map(product=><CartCard product={product} handleRemove={handleRemove} key={product._id}></CartCard>)}
        </Grid>
    );
};

export default ProductCart;