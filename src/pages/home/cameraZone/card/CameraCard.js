import React from 'react';
import { Box, Button, CardActionArea, Divider, Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CameraCard = ({camera}) => {
    const {name,category,image,price}=camera;
    return (
        <Grid item xs={6} sm={4} md={4}>
          <Box sx={{  bgcolor: 'background.paper',p:1 }}>
            <Box sx={{ my: 3, mx: 2, textAlign:'start'}}>
                <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="h4" component="div">
                    {category}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                    ${price}
                    </Typography>
                </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                    {name.slice(0,80)}
                {/* Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                just down the hall. */}
                </Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2, textAlign:'start' }}>
                <Typography gutterBottom variant="body1">
                Select type
                </Typography>
                <Stack direction="row" spacing={1}>
                {/* <Chip label="Extra Soft" />
                <Chip color="primary" label="Soft" />
                <Chip label="Medium" />
                <Chip label="Hard" /> */}
                </Stack>
            </Box>
            <Box sx={{ mt: 3, ml: 1, mb: 1,textAlign:'start' }}>
                <Button>Add to cart</Button>
            </Box>
          </Box>        
        </Grid>
    );
};

export default CameraCard;