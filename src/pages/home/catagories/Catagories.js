import React from 'react';
import homeapp from '../../../images/catagory/homeapp.png';
import tech from '../../../images/catagory/tecnology.png';
import sports from '../../../images/catagory/sports.png';
import fashoin from '../../../images/catagory/fashoin.png';
import vehicle from '../../../images/catagory/vehicles.png';
import tools from '../../../images/catagory/tools.png';
import { Container, Grid, Typography } from '@mui/material';
import CatagoryCard from './card/CatagoryCard';
import { Box } from '@mui/system';

const catagories=[
    {
        name:'Home',
        image:homeapp
    },
    {
        name:'Technology',
        image:tech
    },
    {
        name:'Fashoin',
        image:fashoin
    },
    {
        name:'Sports',
        image:sports
    },
    {
        name:'Vehicle',
        image:vehicle
    },
    {
        name:'Maintenance Tools',
        image:tools
    },

]

const Catagories = () => {
    return (
        <Box >
        <Container style={{backgroundColor:'cornsilk'}}>
            <Typography sx={{fontWeight:700, pt:4}} variant="h4" gutterBottom component="div">
                Featured Catagories
        
           </Typography>
            {/* .slice(1) */}
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{py:4}} columns={{ xs: 4, sm: 8, md: 12 }}>
            {catagories.map(catagory=><CatagoryCard key={Math.random()} catagory={catagory}></CatagoryCard>)
                
            }
            </Grid>
            
        </Container>
        </Box>
    );
};

export default Catagories;