import React from 'react';
import { Box, Button,Divider, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';

const CameraCard = ({camera}) => {
    const {name,category,image,price}=camera;
    return (
        <Grid item xs={6} sm={4} md={4}>
          <Box sx={{  bgcolor: 'background.paper',p:1,height:'380px' }}>
            <Box sx={{ my: 3, mx: 2, textAlign:'start',height:'80px'}}>
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
                    {name.slice(0,80)}...
                
                </Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2, textAlign:'center' }}>

                <img src={image} alt="" style={{width:'70%',height:'160px'}}  />

                {/* <Typography gutterBottom variant="body1">
                Select type
                </Typography>
                <Stack direction="row" spacing={1}>
                <Chip label="Extra Soft" />
                <Chip color="primary" label="Soft" />
                <Chip label="Medium" />
                <Chip label="Hard" />
                </Stack> */}
            </Box>
            <Box sx={{ mt: 3, ml: 1, mb: 1,textAlign:'start' }}>
                <Button>Add to cart</Button>
            </Box>
          </Box>        
        </Grid>
    );
};

export default CameraCard;