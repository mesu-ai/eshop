import { Button } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import more from '../../../images/Our Exclusive Deals.png';



const Sales = () => {
    return (
        <div>
            <Button>
            <Box sx={{borderRadius: '16px'}}>

            
              <img src={more} alt="" /> 

            </Box>
            </Button>
            
        </div>
    );
};

export default Sales;