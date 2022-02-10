import { Container, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductOrder = () => {
    const {id}= useParams();
    return (
        <Container>
            <p>product id: {id}</p>
            <Grid container space={4}>
            <Grid item sm={12} md={7} lg={8}>mesu</Grid>
            <Grid item sm={12} md={5} lg={4}>mesu</Grid>

            </Grid>
            
        </Container>
    );
};

export default ProductOrder;