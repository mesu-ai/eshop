import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import bkash from '../../../images/payment/bKash.png';
import ConfirmOrder from '../../order/confirmOrder/ConfirmOrder';

const validMobile=new RegExp(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/);

const PaymentMethod = () => {

    const [biller,setBiller]=useState([]);
    const [mobileErr,setMobileErr]=useState(false);
    const navigate=useNavigate();


    const handleOnBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;

        const newBiller={...biller};
        newBiller[field]=value;
        setBiller(newBiller);

    }



    useEffect(()=>{
       
        if(!validMobile.test(biller.mobile) && biller?.mobile !==undefined){
            setMobileErr(true);

        }else{
            setMobileErr(false);
           // console.log(biller.mobile);
            
        }

    },[biller?.mobile]);

    const confirmPayment=()=>{
        navigate('/confirmorder');
        
    }


    return (
      <Box>

        <form onSubmit={confirmPayment}>
        <Grid container spacing={2}>
        <Grid item xs={6}>
            <img src={bkash} alt="" height='120px' width='150px' />
        
        </Grid>
        <Grid item xs={6}>

            
                <TextField
                    sx={{ mt:1, width: '25ch' }}
                    required  
                    label="bKash Num"
                    name='mobile'
                    onBlur={handleOnBlur}
                    id="standard-size-small"
                    // defaultValue="01700000000"
                    size="small"
                    variant="standard"
                />
                {mobileErr && <Typography color='error.main' variant='body1' sx={{ml:1}}>Mobile Num is not valid !</Typography>}

                <TextField
                    sx={{ mt:.5, width: '25ch' }}
                    required  
                    label="TrxID"
                    name='TrxID'
                    onBlur={handleOnBlur}
                    id="standard-size-small"
                    // defaultValue="01700000000"
                    size="small"
                    variant="standard"
                />

            
        </Grid>    
        </Grid>
            <Button type='submit'  fullWidth sx={{mt:4}} variant="contained" color="warning">
                    Confirm Payment
            </Button>
        </form>
      </Box>
            
    );
};

export default PaymentMethod;