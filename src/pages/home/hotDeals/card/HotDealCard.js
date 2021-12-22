import * as React from 'react';
import '../HotDeals.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';

const HotDealCard = ({hotdeal}) => {
    const {title,image,price,rating,discount} = hotdeal;

    return (
        <Card sx={{mx:1}}>
        <CardActionArea>
        <Box className='card-img-bg' sx={{display:'flex',justifyContent: 'center', alignItems: 'center'}} style={{height:'200px'}}>
            
        <CardMedia
         sx={{mx:'auto'}}
          component="img"
          style={{width:'180px',height:'150px'}}
          image={image}
          alt="green iguana"
        />

        </Box>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          {/* <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly /> */}
          <Box sx={{display:'flex'}}>
          <Typography style={{textAlign:'start'}} sx={{fontWeight:700,pl:0}} variant="h6" color="text.secondary">
            USD {price}
          </Typography>
          <Typography style={{backgroundColor:'crimson',color:'white'}} sx={{px:1,ml:3, borderRadius:2}} variant="h6">
           - {discount}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
    );
};

export default HotDealCard;