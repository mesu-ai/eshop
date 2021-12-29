
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Homebanner from '../homebanner/Homebanner';
import QuickLink from '../quickLink/QuickLink';
import CatagoryList from './catagoryList/CatagoryList';

const HomeViewPort = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{height:'100vh',backgroundColor:'#f5f5f5'}}>
        <Grid container spacing={1}>
        
            <Grid item  sx={{display:{xs:'none',sm:'none',md:'flex'}}} md={2}>
                <CatagoryList></CatagoryList>
            
            </Grid>
            <Grid item xs={12} md={10}>
                <Homebanner></Homebanner>
                <QuickLink></QuickLink>
            
            </Grid>
            
            
        </Grid>
        </Box>
    );
};

export default HomeViewPort;