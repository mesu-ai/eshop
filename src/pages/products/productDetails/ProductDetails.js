import '../Products.css';
import { Button, Container, CssBaseline, Divider,  Grid, IconButton, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addTodb } from '../../../utilities/LocalStorage';
import SnackbarAlert from '../../../components/shared/snackbar/SnackbarAlert';
import { styled } from '@mui/material/styles';



const CustomCartButton= styled(Button)(({ theme }) => ({
    color:'black',
    borderRadius: 16,
    backgroundColor: 'yellow',
    '&:hover': {
      backgroundColor: '#ffd814',
    },
  }));

const  CustomBuyButton= styled(Button)(({ theme }) => ({
    color:'black',
    borderRadius: 16,
    backgroundColor: '#ffa41c',
    '&:hover': {
      backgroundColor: '#e47911',
      
    },
  }));


const ProductDetails = () => {

    const navigate=useNavigate();

    const [product,setProduct]=useState([]);
    const [quentity,setQuentity]=useState([1]);
    // const [stocks,setStocks]=useState([]);
    const [open, setOpen] = React.useState(false);

   const {id}= useParams();

   const url=`https://limitless-fjord-65876.herokuapp.com/products/${id}`

   useEffect(()=>{
       fetch(url)
       .then(res=>res.json())
       .then(data=>setProduct(data))

   },[url]);
   console.log(product);
  

    
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

    const addtoCart=()=>{
        addTodb(id,quentity);
        setOpen(true);

        // setTimeout(()=>{
        //     navigate('/');

        // },1000);
       // navigate('/');
    }

    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    
    
    // // const handleStock=()=>{
    //     let stock=product.stock;
    //     console.log(stock);
    //     setStocks(stock-quentity);

    // // }
   
   
  // console.log(product);
   
    return (
        <>
        <React.Fragment>
        <CssBaseline />
        <Container>
        <Box sx={{ mt:6 }} style={{minHeight:'100vh',maxHeight:'auto'}}>



        {product.length !==0 ? 
            <Grid container spacing={2}>

                <Grid item  xs={12} sm={6} md={3.5} lg={3.5} className="static-section">
                    <img src={product?.image} alt="" style={{width:'90%'}}  />
                    
                </Grid>
                <Grid item sx={{textAlign:'start',overflowY:{sm:'scroll'},height:{sm:'100vh',xs:'auto'}}} xs={12} sm={6} md={5.5} lg={5.5} className="scroll-section">
                    
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

                    <Box sx={{display:'flex',alignItems:'start',justifyContent:'space-between'}}>

                        <Typography  sx={{fontWeight: 'bold',color:'crimson'}} variant="h6" component="div" gutterBottom>
                            USD ${product?.price}
                        </Typography>

                        <Typography  sx={{fontWeight: 'bold',color:'info.main'}} variant="body1" component="div">
                          Est. Shipping: ${product?.shipping}
                        </Typography>

                        <Typography  sx={{fontWeight: 'bold',display:'flex',alignItems:'center',fontStyle: 'oblique'}} variant="body2" component="div" gutterBottom>
                        <LocalShippingIcon color="error" sx={{mr:1}}/>
                         From  {product?.seller} Store
                        </Typography>

                       
                    </Box>

                    

                    
<div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsa, aliquid explicabo voluptates aspernatur iste doloribus expedita ipsam quaerat pariatur, provident eius cupiditate, nemo minima deserunt sunt exercitationem neque rem nulla quasi a impedit nesciunt tempora aut? Ab ex minus, quo est incidunt dignissimos illo repudiandae rem natus temporibus non porro velit modi perspiciatis tempore! Cupiditate veritatis, temporibus incidunt similique odit asperiores iusto dolorem ipsam porro inventore saepe, iste harum debitis nulla voluptatum voluptatibus itaque assumenda, maiores possimus minus exercitationem sequi. Vel, sapiente itaque ratione aspernatur natus optio mollitia tenetur atque necessitatibus, repudiandae delectus ipsum officia dolores! Doloribus architecto doloremque incidunt recusandae pariatur nisi quasi, suscipit nam dolore quas tempore ratione cum odit id dignissimos error, rem totam dolor odio saepe rerum corporis. Cupiditate, vitae accusamus. Error necessitatibus ipsum nihil dolor, beatae incidunt explicabo autem praesentium illo sit, laudantium minus delectus odit veritatis expedita temporibus unde officiis quis cum impedit aliquid quia fugiat repudiandae. Quis cumque excepturi eius eligendi vitae, illo ratione amet! Soluta nostrum, praesentium ipsa possimus odit adipisci. Labore quis vero consequuntur ad tempore nulla obcaecati, cumque at explicabo dolore, quae laborum recusandae rerum consectetur corrupti velit sed enim ducimus fuga, commodi tempora itaque unde suscipit? Maiores ex, neque a, officiis, iste ipsa reprehenderit culpa laboriosam suscipit laudantium provident sequi. Quo perspiciatis minus dolorem rem perferendis est expedita ducimus eos impedit obcaecati suscipit minima, nulla ipsa voluptas similique nihil! Assumenda inventore aliquam non dolores expedita iste eaque provident accusamus soluta sapiente officia necessitatibus ipsa, sint vitae molestias exercitationem eligendi quam, quos at aspernatur ducimus laudantium aperiam? Inventore aut recusandae rem non ex porro sed neque, voluptas reprehenderit corrupti blanditiis nam possimus sit eaque perspiciatis, debitis magni praesentium? Odit consectetur nam delectus, distinctio quo aliquid sapiente molestias expedita quibusdam necessitatibus beatae? Doloremque, provident architecto perferendis, veniam quisquam aut iusto aliquid beatae sed quam voluptatibus. Beatae itaque, asperiores esse neque reiciendis dignissimos culpa sint architecto veniam expedita ab, accusantium earum ad. Non accusantium esse assumenda alias sit molestias hic, itaque tenetur ipsa porro totam iusto minus amet quidem placeat cumque veritatis, omnis aut optio aperiam tempora sequi. Alias sint sit pariatur earum voluptates cumque debitis ad similique quibusdam blanditiis, illo vel, inventore fuga porro nisi explicabo dolorem officiis hic officia nemo. Consequatur deleniti quaerat minima corporis id voluptatum, incidunt aliquam impedit similique aspernatur eum molestiae. Reprehenderit debitis laborum, quis nobis harum ratione dolores molestiae facere repellat consectetur quo dicta labore optio impedit est nostrum temporibus animi officiis eius consequatur adipisci. Ducimus temporibus deleniti voluptas, animi neque quidem alias debitis saepe eligendi expedita, placeat iusto! Expedita quis quia pariatur cum natus velit. Nostrum tempora enim quidem nisi, rerum esse omnis quasi inventore explicabo autem magnam quas officiis est similique ullam veritatis, natus neque mollitia odit. Accusamus saepe quae vitae consequatur harum quia est laudantium repellendus ullam ipsum totam eius perspiciatis, architecto, temporibus numquam dolorem. Odio nostrum ipsam delectus perspiciatis. Fuga veniam tenetur ipsum iste odio sit exercitationem fugit, quam praesentium ipsam minus! Doloribus deleniti cumque, aut quasi excepturi perspiciatis nulla totam?</p>
</div>                   

                </Grid>

                <Grid item  xs={12} sm={6} md={3} lg={3} className="static-section">
                  <Paper elevation={3}  sx={{p:2,border:1,borderColor: '#d5d9d9',boxShadow: 1,borderRadius:3}}>

                    <Typography  sx={{fontWeight: 'bold',textAlign:'start',color:'crimson'}} variant="h6" component="div" gutterBottom>
                        USD ${product?.price}
                    </Typography>

                    
                    <Box sx={{display:'flex',justifyContent:'start',alignItems:'center'}}>
                        
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
                    
                    </Box>
                    <Typography  sx={{ml:1,color: 'text.secondary'}} variant="body2" component="div">
                        {product?.stock} peices available
                    </Typography>
            

                    <Box sx={{mt:5,display:'flex',flexDirection:'column'}}>
                        
                        <CustomCartButton onClick={addtoCart}  sx={{fontWeight:'600',textTransform:'capitalize'}}>Add to Cart</CustomCartButton>

                        <CustomBuyButton  onClick={handleBuyNow}  sx={{ textTransform:'capitalize',fontWeight:'bold',mt:1 }}>Buy Now</CustomBuyButton>

                        
                </Box>
                </Paper>
                    
                </Grid>


            </Grid>:<div></div>
        }
        </Box>
        <SnackbarAlert open={open} handleClose={handleClose}></SnackbarAlert>

        </Container>

    
      <Container  className='details-container'>
        <Box sx={{ bgcolor: '#cfe8fc'}} >
        <div className="left-static">
        <h1>Not scrollable content</h1>
        </div>
        <div className="right-scroll">
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, nemo repellat. Libero nemo laboriosam modi dignissimos, voluptatem possimus nam expedita natus impedit, unde, aperiam ipsum! Laboriosam eaque recusandae mollitia sint nihil eos praesentium? Sapiente harum impedit velit necessitatibus non voluptate, perspiciatis maxime. Quae accusamus aut distinctio iusto mollitia, incidunt, esse voluptatem id eaque obcaecati magni cupiditate aliquam animi architecto ut. Accusantium odit neque debitis soluta iste suscipit aspernatur mollitia officia in aliquid? Eligendi minus quos, unde voluptas optio illum velit totam libero! Dolore sint doloremque consequuntur, odio quam harum voluptatibus excepturi officia ratione provident labore illo. Quasi esse nesciunt ex temporibus totam deleniti pariatur ea asperiores nisi nostrum, inventore odio aliquam nemo odit sequi atque maxime assumenda corporis. In enim voluptatem asperiores necessitatibus vel explicabo rem nam ab voluptates minus quam molestiae adipisci debitis, possimus aperiam distinctio tenetur. Nam quas ea porro, exercitationem delectus totam mollitia. Ut est iure, quaerat, non nemo maiores omnis molestias aliquam earum adipisci possimus molestiae? Doloremque, maxime? Ipsum laborum aspernatur earum veniam labore saepe dolore sequi vitae quasi minus ducimus facere alias laboriosam tenetur numquam possimus, unde ipsa nihil sapiente impedit eum? Dolorem veniam temporibus exercitationem praesentium corporis quaerat nobis dolorum provident illo laboriosam quas quia omnis deserunt dolores, sequi, iure accusamus placeat ex. Doloribus debitis quis itaque perspiciatis fugiat explicabo ducimus obcaecati aliquam, nesciunt inventore iusto illum ipsa delectus unde veritatis, consequatur accusamus officia omnis modi non dolores! Nisi sed animi quae, nostrum commodi vel ut, ab ipsam quam aut consequatur voluptatibus, non totam! Doloremque in rem, est hic cum odio ut fugiat, et perspiciatis ratione veritatis magnam facere aliquam necessitatibus. Velit error ipsa nisi quod veniam ducimus. Nostrum, asperiores veniam? Praesentium, ipsam. Consequatur fugit harum, voluptatum deserunt, quas adipisci itaque veritatis sapiente iure commodi, odio mollitia. Esse consectetur ad architecto tenetur culpa ea itaque magni? Quis, perferendis qui eveniet accusamus temporibus exercitationem obcaecati architecto. Nisi ipsum quod error ab officia in nobis ratione tempore magnam similique, corporis accusantium, distinctio ipsa animi vitae sint assumenda aliquid beatae molestias, exercitationem molestiae culpa fugiat nam! Tempora quo libero, voluptate est veritatis ratione dolore alias omnis, nesciunt accusamus veniam ad expedita repellat esse ducimus sit ea aspernatur modi amet, facilis enim nemo aliquid inventore nobis. Magni molestias quis doloribus sint consequatur fugiat labore provident aut, unde repudiandae sunt error incidunt reprehenderit natus, quo obcaecati, laudantium modi itaque assumenda eius. Itaque odio saepe consectetur voluptas placeat voluptatum corporis distinctio veniam error alias corrupti culpa animi exercitationem minima, perspiciatis, modi unde quaerat eum dolor illo? Obcaecati facilis quidem tempora et beatae recusandae deleniti fugiat totam aut, eligendi, laudantium, nesciunt earum iste vitae consequuntur soluta sapiente vero fugit? Dolore et adipisci vel commodi delectus provident earum quo. Quo dolorem facere voluptatibus repellendus optio beatae, officia molestiae omnis sequi sed corporis enim maxime deserunt labore facilis dolores eligendi cum ab! Quia veritatis, sunt ipsam suscipit voluptatum repellendus voluptates dolore vitae itaque ullam totam facere expedita eius harum, hic aspernatur soluta at nisi pariatur cum velit praesentium assumenda molestiae! Ipsam, architecto excepturi.
        </p>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, nemo repellat. Libero nemo laboriosam modi dignissimos, voluptatem possimus nam expedita natus impedit, unde, aperiam ipsum! Laboriosam eaque recusandae mollitia sint nihil eos praesentium? Sapiente harum impedit velit necessitatibus non voluptate, perspiciatis maxime. Quae accusamus aut distinctio iusto mollitia, incidunt, esse voluptatem id eaque obcaecati magni cupiditate aliquam animi architecto ut. Accusantium odit neque debitis soluta iste suscipit aspernatur mollitia officia in aliquid? Eligendi minus quos, unde voluptas optio illum velit totam libero! Dolore sint doloremque consequuntur, odio quam harum voluptatibus excepturi officia ratione provident labore illo. Quasi esse nesciunt ex temporibus totam deleniti pariatur ea asperiores nisi nostrum, inventore odio aliquam nemo odit sequi atque maxime assumenda corporis. In enim voluptatem asperiores necessitatibus vel explicabo rem nam ab voluptates minus quam molestiae adipisci debitis, possimus aperiam distinctio tenetur. Nam quas ea porro, exercitationem delectus totam mollitia. Ut est iure, quaerat, non nemo maiores omnis molestias aliquam earum adipisci possimus molestiae? Doloremque, maxime? Ipsum laborum aspernatur earum veniam labore saepe dolore sequi vitae quasi minus ducimus facere alias laboriosam tenetur numquam possimus, unde ipsa nihil sapiente impedit eum? Dolorem veniam temporibus exercitationem praesentium corporis quaerat nobis dolorum provident illo laboriosam quas quia omnis deserunt dolores, sequi, iure accusamus placeat ex. Doloribus debitis quis itaque perspiciatis fugiat explicabo ducimus obcaecati aliquam, nesciunt inventore iusto illum ipsa delectus unde veritatis, consequatur accusamus officia omnis modi non dolores! Nisi sed animi quae, nostrum commodi vel ut, ab ipsam quam aut consequatur voluptatibus, non totam! Doloremque in rem, est hic cum odio ut fugiat, et perspiciatis ratione veritatis magnam facere aliquam necessitatibus. Velit error ipsa nisi quod veniam ducimus. Nostrum, asperiores veniam? Praesentium, ipsam. Consequatur fugit harum, voluptatum deserunt, quas adipisci itaque veritatis sapiente iure commodi, odio mollitia. Esse consectetur ad architecto tenetur culpa ea itaque magni? Quis, perferendis qui eveniet accusamus temporibus exercitationem obcaecati architecto. Nisi ipsum quod error ab officia in nobis ratione tempore magnam similique, corporis accusantium, distinctio ipsa animi vitae sint assumenda aliquid beatae molestias, exercitationem molestiae culpa fugiat nam! Tempora quo libero, voluptate est veritatis ratione dolore alias omnis, nesciunt accusamus veniam ad expedita repellat esse ducimus sit ea aspernatur modi amet, facilis enim nemo aliquid inventore nobis. Magni molestias quis doloribus sint consequatur fugiat labore provident aut, unde repudiandae sunt error incidunt reprehenderit natus, quo obcaecati, laudantium modi itaque assumenda eius. Itaque odio saepe consectetur voluptas placeat voluptatum corporis distinctio veniam error alias corrupti culpa animi exercitationem minima, perspiciatis, modi unde quaerat eum dolor illo? Obcaecati facilis quidem tempora et beatae recusandae deleniti fugiat totam aut, eligendi, laudantium, nesciunt earum iste vitae consequuntur soluta sapiente vero fugit? Dolore et adipisci vel commodi delectus provident earum quo. Quo dolorem facere voluptatibus repellendus optio beatae, officia molestiae omnis sequi sed corporis enim maxime deserunt labore facilis dolores eligendi cum ab! Quia veritatis, sunt ipsam suscipit voluptatum repellendus voluptates dolore vitae itaque ullam totam facere expedita eius harum, hic aspernatur soluta at nisi pariatur cum velit praesentium assumenda molestiae! Ipsam, architecto excepturi.
        </p>
        </div>
        </Box>
        </Container>
    </React.Fragment>
     </>

    );
};

export default ProductDetails;



