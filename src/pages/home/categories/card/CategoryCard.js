import React from 'react';
import { CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CategoryCard = ({category}) => {
    const {name,image}=category;
    return (
      <Grid item xs={2} sm={4} md={4}>
      <Card sx={{  }}>
      <CardActionArea>
        <CardMedia
          sx={{mx:'auto',py:2}}
          component="img"
          style={{height:'150px',width:'280px'}}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>          
      </Grid>
    );
};

export default CategoryCard;