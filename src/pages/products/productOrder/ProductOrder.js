import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ProductOrder = () => {
    const {user}= useAuth();
    const {id}= useParams();
    return (
        <Container>
            <p>product id: {id}</p>
            <Grid container space={4}>
            <Grid item xs={12} sm={6} md={7} lg={8}>
                
            shopping cart
                

            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={4} sx={{textAlign:'start'}}>
            <Typography variant="h6" gutterBottom component="div">
              Shipping & Billing
            </Typography>

            <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                <TextField
                label="Name"
                id="outlined-size-small"
                defaultValue={user.displayName}
                variant="standard"
                size="small"
                />
                
                </div>
                
                <div>
                <TextField
                label="Email"
                id="filled-size-small"
                defaultValue={user.email}
                variant="standard"
                size="small"
                />
                
                </div>
                <div>
                <TextField
                label="Mobile Num"
                id="standard-size-small"
                defaultValue="Small"
                size="small"
                variant="standard"
                />

                </div>
            </Box>

            <Typography variant="h6" gutterBottom component="div">
            Order Summary
            </Typography>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography color="text.secondary" variant="body1" gutterBottom component="div">
                 Subtotal
                </Typography>
                <Typography  variant="body1" gutterBottom component="div">
                 Price
                </Typography>

            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                
                <Typography color="text.secondary" variant="body1" gutterBottom component="div">
                 Shipping Fee
                </Typography>

                <Typography  variant="body1" gutterBottom component="div">
                 Price
                </Typography>

            </Box>
            <Divider sx={{mt:2,mb:1}}></Divider>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                
                <Typography  variant="body1" gutterBottom component="div">
                 Total
                </Typography>

                <Typography  variant="body1" gutterBottom component="div">
                 Price
                </Typography>

            </Box>

            <Button fullWidth sx={{mt:3}} variant="contained" color="warning">
             Proceed to Pay
            </Button>






            </Grid>

            </Grid>
            
        </Container>
    );
};

export default ProductOrder;