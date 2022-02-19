import React from 'react';
import '../../../products/productCard/ProductCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { Box} from '@mui/system';
import { useNavigate } from 'react-router-dom';

const FlashSellCard = ({product}) => {
    const {_id,name,image,price,star,starCount}=product;

    const navigate= useNavigate();
  
    const handlebuyNow=(id)=>{
    const url=`/buyproduct/${id}`
    navigate(url);
   
    }

    const handleDetails=(id)=>{
      navigate(`/productdetails/${id}`)
    }
    return (
        
        <Card sx={{mx:1}}>

        <Box sx={{display:'flex',justifyContent:'center'}}>
        <img  src={image} alt="" style={{width:'80%',height:'200px'}} />
        </Box>
        <CardContent>
          <Typography  className="ellipses" title={name} gutterBottom variant="body1" component="div">
             {name}
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
        <Button onClick={()=>handlebuyNow(_id)}  size="small">Buy Now</Button>
          
          <Button onClick={()=>handleDetails(_id)}  size="small">See Details</Button>
        </CardActions>
        </Card>
        
    );
};

export default FlashSellCard;