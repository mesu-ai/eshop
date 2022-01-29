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

          

          <Box sx={{display:'flex'}}>
          <Typography style={{textAlign:'start'}} sx={{fontWeight:700,pl:0}} variant="h6" color="text.black">
            ${price}
          </Typography>
          <Typography style={{backgroundColor:'',color:'red'}} sx={{px:1,ml:1, borderRadius:2,color:"text.black"}} variant="h6">
            -${discount} off
          </Typography>
          </Box>

          <Rating sx={{display:'flex',justifyContent:'start',alignItems:'center',mt:1}}  name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />

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