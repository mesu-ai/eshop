import { Container, Divider, Grid, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductCard from './productCard/ProductCard';

const Products = () => {
    

    const [products,setProducts] =useState([]);
    const [displayProducts,setDisplayProducts]=useState([]);
    const [searchProducts,setSearchProducts]=useState([]);
    
    const {findItem}=useParams();
   // console.log(findItem);

    const location=useLocation();
    console.log(location?.state?.findProducts);
    
    let url;

    (findItem?
    url=`https://limitless-fjord-65876.herokuapp.com/products?category=${findItem}`:
   
    url='https://limitless-fjord-65876.herokuapp.com/products');


    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setDisplayProducts(data);

        }); 

    },[url]);


    if(products && location?.state?.searchText){
        const findProducts=products.filter(product=>product.name.toLowerCase().includes(location?.state?.searchText.toLowerCase()));
        // setSearchProducts(findProducts)
        // console.log(findProducts);

    }

    // console.log(searchProducts);

   
   
    const handleSearch=(e)=>{
        
        const searchText=e.target.value;

        const findProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(findProducts);
        setDisplayProducts(findProducts);

    }


    return (
         <Container>
             
             <Box sx={{mt:3}}>
                
                <Box
                sx={{display:{xs:'block',sm:'flex'},justifyContent:'space-between',alignItems:'end'}}>
                
                <Typography variant='h5' color='info.main' component='div'>Product Zone</Typography>


                <TextField type='search'  sx={{ width: 500,maxWidth: '100%',bgcolor:'floralwhite'
                }} onChange={handleSearch} fullWidth label="Search Product…" id="fullWidth" />
                </Box>

             </Box>
             <Divider sx={{mt:2,bgcolor:'black'}}></Divider>



            <Grid container spacing={{ xs: 2, md: 3 }} sx={{py:3}} columns={{ xs: 4, sm: 8, md: 12, lg:12 }}>
                
                {
                    displayProducts.map(product=><ProductCard key={Math.random()} product={product}></ProductCard>)         
                    
                }
                </Grid>
           </Container>
            
        
    );
};

export default Products;