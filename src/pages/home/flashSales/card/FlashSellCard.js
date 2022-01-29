import React from 'react';
import '../../allproducts/AllProduct.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { Box} from '@mui/system';

const FlashSellCard = ({product}) => {
    const {name,image,price,star,starCount}=product;
    return (
        
        <Card sx={{mx:1}}>

        <Box sx={{display:'flex',justifyContent:'center'}}>
        <img  src={image} alt="" style={{width:'80%',height:'200px'}} />
        </Box>
        <CardContent>
          <Typography  className="ellipses" title={name} gutterBottom variant="body1" component="div">

          {name}

            {/* {name} */}
          </Typography>
          <Typography  sx={{color: 'text.secondary',textAlign: 'left'}} gutterBottom variant="h6" component="div">
            <s>$10</s>
           <span style={{fontWeight: 'bold',color:'crimson',marginLeft:'8px'}}>${price}</span> /piece 
          </Typography>
          
        
        <Box sx={{display:'flex',justifyContent:'start',alignItems:'center'}}>
            <Rating sx={{}}  name="half-rating-read" defaultValue={star} precision={0.5} readOnly />

            <Typography  sx={{color: 'text.secondary',ml:1}} variant="h6" component="div">
            ({starCount})
            </Typography>
        
        </Box> 
        </CardContent>
        
        <CardActions sx={{ml:1}}>
          <Button size="small">Buy Now</Button>
          <Button size="small">See Details</Button>
        </CardActions>
        </Card>
        
    );
};

export default FlashSellCard;