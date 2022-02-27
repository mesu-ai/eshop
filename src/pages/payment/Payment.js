import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import OrderList from './orderlist/OrderList';
import { Container } from '@mui/material';
import PaymentMethod from './paymentmethod/PaymentMethod';
import { useLocation } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const Payment = () => {
    const {totalPrice,name,mobile,cart}= useLocation()?.state;
     console.log(cart);



    return (

        <Container>
          <Box sx={{ width: '100%',minHeight:'100vh',maxHeight:'auto',mt:3 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={7}>

                  <Item sx={{mb:2}}>
                    <Typography sx={{textAlign:'start'}} variant="h6" gutterBottom component="div">
                      Your's Selected Products-
                    </Typography>
                  </Item>
                  <Item>
                    <OrderList/>
                  </Item>
                </Grid>
                
                <Grid item xs={5}>
                  <Item sx={{p:2}}>
                       
                      <Box sx={{textAlign:'start'}}>
                        <Typography variant="h6" sx={{color:'black'}} gutterBottom component="div">
                        Customer Info:
                        </Typography>

                        <Box sx={{pl:2}}>

                            <Typography variant="body1" color="text.secondary" gutterBottom component="div">
                             {name}
                            </Typography>
                            
                            <Typography variant="body1" color="text.secondary" gutterBottom component="div">
                              {mobile}
                            </Typography>

                        </Box>
                      </Box>


                      <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography variant="body1" gutterBottom component="div" sx={{color:'black'}}>
                        Total Price 
                        <span style={{color:'gray'}}> (Item Quentity X)</span> 
                        </Typography>
                        
                        <Typography variant="body1" gutterBottom component="div" sx={{color:'black'}}>
                        {totalPrice?.totalPrice}
                        </Typography>

                      </Box>
                      <Box sx={{textAlign:'start'}}>
                        <Typography variant="h6"  gutterBottom component="div" sx={{color:'black'}}>
                        Payment Method:
                        </Typography>

                        <PaymentMethod/>
                        
                      </Box>
                    
                  </Item>
                </Grid>
            </Grid>
          </Box>
        </Container>
        

        
    );
};

export default Payment;