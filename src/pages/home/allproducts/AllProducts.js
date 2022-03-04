import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, Grid, Pagination, Stack, Typography } from '@mui/material';
import ProductCard from '../../products/productCard/ProductCard';


const AllProducts = () => {

    

    const [products,setProducts] = useState([]);
    const [displayProducts,setDisplayProducts]= useState([]);
    const [page,setPage]=useState(0);
    const [totalPage,setTotalPage]= useState(0);

    const size=9;

    useEffect(()=>{
      fetch(`https://limitless-fjord-65876.herokuapp.com/products?page=${page}&&size=${size}`)
        .then(res=>res.json())
        .then(data=>{
            
            // setShortProducts(data.slice(-9));
            
            setProducts(data.products);
            setDisplayProducts(data.products);
            const count=data.count;
            const pageNumber=Math.ceil(count/size);
            setTotalPage(pageNumber);
            
        })

    },[page]);
    
    // console.log('page:',page);
    // console.log('totalpage:',totalPage);

    

    const handleSearch=e=>{
      
      
      const searchText= e.target.value;
      // console.log(searchText);

    const findProduct=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayProducts(findProduct);
    // console.log(display.length);
    }

    const handlePagination=(e)=>{
      const currentPage=e.target.textContent;
      setPage(currentPage-1);
         
    }


    // const Search = styled('div')(({ theme }) => ({
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor:'white' ,
    //     border:'1px solid black',
    //     '&:hover': {
    //       backgroundColor:'white',
    //     },
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //       marginLeft: theme.spacing(1),
    //       width: 'auto',
    //     },
    //   }));
      
    //   const SearchIconWrapper = styled('div')(({ theme }) => ({
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   }));
      
    //   const StyledInputBase = styled(InputBase)(({ theme }) => ({
    //     color: 'inherit',
    //     '& .MuiInputBase-input': {
    //       padding: theme.spacing(1, 1, 1, 0),
    //       // vertical padding + font size from searchIcon
    //       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    //       transition: theme.transitions.create('width'),
    //       width: '100%',
    //       [theme.breakpoints.up('sm')]: {
    //         width: '12ch',
    //         '&:focus': {
    //           width: '20ch',
    //         },
    //       },
    //     },
    //   }));



    return (
        <Box sx={{mt:3}}>
        <Container style={{backgroundColor:'snow'}}>
        
        <Typography style={{textAlign:'start'}} sx={{ color: 'crimson',pt:5 }} variant="h4" gutterBottom component="div">
            More to Love
            </Typography>

            <Box sx={{display:'flex',justifyContent:'space-between'}}>
            
            <input style={{color:'green',paddingLeft:'10px'}} type="search" id="site-search" 
            aria-label="Search through site content" placeholder="Search…" onChange={handleSearch}></input>

            
              
            {/* <Search style={{marginLeft:'0'}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              
            />
           </Search> */}

            <Button size="small" variant="outlined">Show More</Button>

            </Box>


            <Divider sx={{my:2,backgroundColor:'black'}}/>
            
            {/* .slice(1) */}
            
            
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{py:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            {
                displayProducts.map(product=><ProductCard key={Math.random()} product={product}></ProductCard>)         
                
            }
            </Grid>

            <Stack spacing={2} sx={{py:4}}>

                <Pagination 
                onClick={handlePagination}
                // onChange={e => handleChange(e.target.textContent)}
                sx={{mx:'auto'}}  count={totalPage} variant="outlined" color="secondary" />
            </Stack>
            
        </Container>
        </Box>
    );
};

export default AllProducts;