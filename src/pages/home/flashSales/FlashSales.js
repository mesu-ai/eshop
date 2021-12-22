import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const FlashSales = () => {
    return (
        <Container>
            <Typography style={{textAlign:'start'}} sx={{ color: 'info.main',mt:2 }} variant="h4" gutterBottom component="div">
                Flash Sell
            </Typography>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            <Box sx={{display:'flex'}}>
            <Typography style={{textAlign:'start'}} sx={{ color: 'warning.main' }} variant="h6" gutterBottom component="div">
                On Sell Now
            </Typography>
            <Typography style={{textAlign:'start',marginLeft:'4vw'}} sx={{}} variant="h6" gutterBottom component="div">
                Sell End
            </Typography>
            <Typography   variant="h5" gutterBottom component="div">
               (time)
            </Typography>

            </Box>

            <Button size="small" variant="outlined">Show More</Button>


            </Box>

            <hr />


        </Container>

    
    );
};

export default FlashSales;