import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Typography from '@mui/material/Typography';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button, Grid, Paper, Stack } from '@mui/material';
import flashsellImg from '../../../../images/flashsell/flashsell.jpg';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(245 245 245)',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  }));


const ManageFlashSell = () => {
    const date=new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(date.setMonth(date.getMonth()+1));
    const [error,setError]=useState(false);

    
    const handleStartDate = (newValue) => {
        setStartDate(newValue);
    };
    const handleEndDate = (newValue) => {
        setEndDate(newValue);
    };

    useEffect(()=>{
        const diff=endDate-startDate;
        if(diff<1){

            setError(true);
        }else{
            setError(false);
        }

    },[endDate, startDate])

    const handleSetTime=()=> {
        if(error){
            setError(true);
        }else{
            console.log('st:',startDate,'ed:',endDate)

        }

    }

    return (
        <Box style={{minHeight:'100vh',maxHeight:'auto'}} sx={{}}>
            
            <Grid container spacing={2} sx={{mt:5}}>
              <Grid item xs={12} md={5}>
                  <img src={flashsellImg} alt="" width={300} height={308} />     
              </Grid>
                
                
              <Grid item xs={12} md={7} >
                    <Item sx={{pl:5}}>
                      <Typography sx={{textAlign:'start',fontWeight:'bold'}} gutterBottom variant="h5"  component='div'>Flash Sell Setting</Typography>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>     
                        <Stack spacing={3} sx={{mt:4}}>

                            <DateTimePicker
                                
                                label="Sell Start"
                                value={startDate}
                                onChange={handleStartDate}
                                renderInput={(params) => <TextField {...params} sx={{maxWidth:400,minWidth:'auto'}} />}
                            />
                            <DateTimePicker
                                label="Sell End"
                                value={endDate}
                                onChange={handleEndDate}
                                renderInput={(params) => <TextField {...params} sx={{maxWidth:400,minWidth:'auto'}} />}
                            />

                            {error && 

                             <Typography color='error' sx={{textAlign:'start',fontWeight:'bold'}} gutterBottom variant="body"  component='div'>End Time must be Bigger.</Typography>
                            }

                            <Button onClick={handleSetTime} sx={{maxWidth:400,minWidth:'auto',fontWeight:'bold'}} variant="contained" color='info'>Set Time</Button>

                        </Stack>
                    </LocalizationProvider>

                        
                    </Item>
              </Grid>
            </Grid>
            
            
            
            
        </Box>
    );
};

export default ManageFlashSell;