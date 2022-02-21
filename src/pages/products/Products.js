import { Container, Divider, Grid, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ProductCard from './productCard/ProductCard';

const Products = () => {
    // const [products,setProducts,displayProducts,setDisplayProducts]=useProducts();

    const [products,setProducts] =useState([]);
    const [displayProducts,setDisplayProducts]=useState([]);
    
    const {category}=useParams();
    console.log(category);
    
    let url;
    category? 
    url=`https://limitless-fjord-65876.herokuapp.com/products?category=${category}`:
   
    url='https://limitless-fjord-65876.herokuapp.com/products';


    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products);
            setDisplayProducts(data.products);
        }); 

    },[url]);

   
   
    const handleSearch=(e)=>{
        
        const searchText=e.target.value;

        const findProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(findProducts);

    }


    return (
         <Container>
             
             <Box sx={{mt:3}}>
                
                <Box
                sx={{display:'flex',justifyContent:'space-between',alignItems:'end'}}>
                
                <Typography variant='h5' color='info.main' component='div'>Product Zone</Typography>


                <TextField type='search'  sx={{ width: 500,maxWidth: '100%',bgcolor:'cornsilk'
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