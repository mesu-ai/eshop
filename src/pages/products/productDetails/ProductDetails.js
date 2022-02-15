import '../Products.css';
import { Button, Container, Divider,  Grid, IconButton, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useAuth from '../../../hooks/useAuth';
import AuthModal from '../../../components/authentication/AuthModal';
import { addTodb } from '../../../utilities/LocalStorage';


const ProductDetails = () => {

    const navigate=useNavigate();

    const [product,setProduct]=useState([]);
    const [quentity,setQuentity]=useState([1]);
    // const [stocks,setStocks]=useState([]);

   const {user}=useAuth();
   const {id}= useParams();

   const url=`https://limitless-fjord-65876.herokuapp.com/products/${id}`

   useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>setProduct(data))

   },[url]);
  

    
    const handleAdd=()=>{
        let add= parseInt(quentity)+1;
        setQuentity(add);
        
    }
    const handleMinus=()=>{
        let minus=parseInt(quentity)-1;
        if(minus>=1){
            setQuentity(minus);
        }
        

    }

    

    const handleBuyNow=()=>{
        const url=`/productorder/${id}`
        navigate(url)

        addTodb(id,quentity);



    }

    
    
    // // const handleStock=()=>{
    //     let stock=product.stock;
    //     console.log(stock);
    //     setStocks(stock-quentity);

    // // }
   
   
  // console.log(product);
   
    return (
        // backgroundColor:'#f5f5f5'
        <Container>
        <Box sx={{ flexGrow: 1,mt:6 }} style={{minHeight:'100vh',maxHeight:'auto'}}>

        
        
        {product.length !==0 ? 
            <Grid container spacing={4}>

                <Grid item  sx={{}} xs={12} sm={5} md={4} lg={5}>
                    <img src={product?.image} alt="" style={{width:'90%'}}  />
                    

                </Grid>
                <Grid item sx={{textAlign:'start'}} xs={12} sm={7} md={8} lg={7}>
                    
                    <Typography variant="body1" gutterBottom>
                    {product?.name}
                    </Typography>

                    <Box sx={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                        <Rating sx={{}}  name="half-rating-read" defaultValue={product?.star} precision={0.5} readOnly />

                        <Typography  sx={{ml:1}} variant="body1" component="div">
                        {product?.star}
                        </Typography>

                        <Typography  sx={{color: 'text.primary',ml:2}} variant="body1" component="div">
                        {product?.starCount} Reviews
                        </Typography>

                    </Box> 
                    <Divider sx={{my:2,bgcolor: 'text.secondary'}}/>

                    <Typography  sx={{fontWeight: 'bold'}} variant="h6" component="div" gutterBottom>
                        USD {product?.price}
                    </Typography>

                    
                    <Box sx={{display:'flex',justifyContent:'start',alignItems:'center',mt:2}}>
                       
                        <Typography  sx={{}} variant="body1" component="div">
                            Quentity:
                        </Typography>

                        

                        <IconButton onClick={handleMinus}  aria-label="remove" size="large" fontSize="inherit" sx={{mx:2,p:1}}>
                        <RemoveCircleIcon className="minusbutton"  sx={{color: 'primary.main'}} />
                        </IconButton>

                        <p>{quentity}</p>
                        
                        <IconButton onClick={handleAdd} aria-label="add" size="large" fontSize="inherit" sx={{mx:2,p:1}}>
                        <AddCircleIcon className="addbutton" sx={{color: 'primary.main'}} />
                        </IconButton>


                        <Typography  sx={{ml:1,color: 'text.secondary'}} variant="body1" component="div">
                        {product?.stock} peices available
                        </Typography>

                    
                    </Box>

                    <Typography  sx={{fontWeight: 'bold',mt:2}} variant="body1" component="div">
                        Shipping: ${product?.shipping}
                    </Typography>

                    <Box sx={{mt:5}}>
                        
                        <Button onClick={handleBuyNow} className='buybutton' variant="contained" sx={{ bgcolor: 'tomato',mr:2,textTransform:'capitalize',fontWeight:'bold' }}>Buy Now</Button>

                        <Button className='addcartbutton' variant="contained" sx={{ bgcolor: 'warning.main',textTransform:'capitalize',fontWeight:'bold'}}>Add to Cart</Button>
                    </Box>
                    

                </Grid>


            </Grid>:<div></div>
        }
        </Box>
        </Container>

    );
};

export default ProductDetails;



