import React from 'react';
// import useProduct from '../../../hooks/useProduct';
import { Box, Button, Container, Divider, Grid, Pagination, Stack, Typography } from '@mui/material';
import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useProduct from '../../../hooks/useProduct';
import AllProductCard from './card/AllProductCard';


const AllProducts = () => {

    const [products]=useProduct();
    console.log('display:',products);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor:'white' ,
        border:'1px solid black',
        '&:hover': {
          backgroundColor:'white',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
    return (
        <Box sx={{mt:3}}>
        <Container style={{backgroundColor:'snow'}}>
        
        <Typography style={{textAlign:'start'}} sx={{ color: 'crimson',pt:5 }} variant="h4" gutterBottom component="div">
            More to Love
            </Typography>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            
              
            <Search style={{marginLeft:'0'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
           </Search>

            <Button size="small" variant="outlined">Show More</Button>

            </Box>


            <Divider sx={{my:2,backgroundColor:'black'}}/>
            
            {/* .slice(1) */}
            
            
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{py:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            {
                products.map(product=><AllProductCard key={Math.random()} product={product}></AllProductCard>)         
                
            }
            </Grid>

            <Stack spacing={2} sx={{py:4}}>

                <Pagination sx={{mx:'auto'}}  count={10} variant="outlined" color="secondary" />
            </Stack>
            
        </Container>
        </Box>
    );
};

export default AllProducts;