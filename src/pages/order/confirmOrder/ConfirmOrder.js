import { Box } from '@mui/system';
import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Alert, Typography } from '@mui/material';

const ConfirmOrder = () => {
    return (
        <Box sx={{minHeight:'80vh',maxHeight:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>

            <Box>
            
            <Alert severity="success">This is a success message!</Alert>
            <Typography component='div' variant='h6'>
               successfully ordered
            </Typography>

            </Box>





        </Box>
    );
};

export default ConfirmOrder;