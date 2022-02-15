import React from 'react';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    
  }));
  

const CartCard = ({product,handleRemove}) => {
    const {_id,name,price,quentity,image}=product;

    

    return (
        <Grid item xs={12}  >
            <Item >
                
                <IconButton onClick={()=>handleRemove(_id)} sx={{float:'right'}} variant="contained" color="error" aria-label="remove from shopping cart" title='Remove Product'>
                <ClearIcon  sx={{color:'crimson'}}/>
               </IconButton>

                
                <Grid container spacing={2}>
                <Grid item xs={3} md={2} sx={{display:'flex',justifyContent:'center',alignItems:'start'}}>
                <img src={image} alt="" style={{width:'100px'}} />
                
                </Grid>
                <Grid item xs={5} md={6}>
                    <Typography variant="body2" sx={{textAlign:'start'}} gutterBottom>
                        {name}
                    </Typography>
                
                </Grid>
                <Grid item xs={2} md={2}>
                    <Typography variant="body1" gutterBottom sx={{fontWeight:'bold'}}>
                       $ <span style={{color:'tomato'}}>{price}</span>  
                    </Typography>
                
                </Grid>
                <Grid item xs={2} md={2}>
                    <Typography variant="body1" gutterBottom>
                       Qty: {quentity}      
                    </Typography>
                
                </Grid>
                </Grid>
                
            </Item>
        </Grid>
    );
};

export default CartCard;