import React, { useState } from 'react';
import { Button, Grid, Typography,TextField,Rating } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import { useForm } from 'react-hook-form';
import '../../../../components/authentication/userregister/UserRegister.css';
                    
const CustomizedBox = styled(Box)(({ theme }) => ({
   color:'#c4c4c4', 
   '&:hover': {
     color:'black',
  }
}));
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const [inputList, setinputList]= useState([{discription:'', value:''}]);
    const [rating, setRating] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [image,setImage]=useState(null);

  const handleOnBlur=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    setinputList(list);

  }
 
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
  }

  const handleaddclick=()=>{ 
    setinputList([...inputList, { discription:'', value:''}]);
   
  }


  const onSubmit = (data) => {

     // console.log(data);
     // console.log(inputList);
  
    const product={name:data.name,seller:data.seller,price:data.price,shipping:data.shipping,category:data.category,stock:data.stock,star:rating,starCount:data.starCount,features:inputList,image:data.image}
    
     //console.log(product);

     if(!image){
      // console.log('image:',image);
       return;

     }

     const formData= new FormData();
     formData.append('name',data.name);
     formData.append('seller',data.seller);
     formData.append('category',data.category);
     formData.append('price',data.price);
     formData.append('shipping',data.shipping);
     formData.append('stock',data.stock);
     formData.append('star',rating);
     formData.append('starCount',data.starCount);
     formData.append('features',inputList);
     formData.append('image',image);
     
    // console.log(formData);

      fetch('http://localhost:5000/products', {
      method: 'POST',
      body: formData
      })
      .then(res => res.json())
      .then(data => {
      console.log('Success:', data);
      })
      .catch(error => {
      console.error('Error:', error);
      });




     
  };

    return (
        <div >
            

            <Typography sx={{textAlign:'start',fontWeight:'bold'}} gutterBottom variant="h5"  component='div'>Add New Product:</Typography>
           <form className='register-form' id='form-container' onSubmit={handleSubmit(onSubmit)}>
      
            <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
            <input
                
                className="user-register"
                style={{marginTop:'6px'}}
                placeholder='Product Name'
                type="text"
                {...register('name', {
                required: true,
                })}
            />
            {errors.name && "Please enter the product name"}
            </div>

            <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
            <input
                
                className="user-register"
                style={{marginTop:'6px'}}
                placeholder='Seller'
                type="text"
                {...register('seller', {
                required: true,
                })}
            />
            {errors.seller && "Please enter the seller name"}
            </div>

           <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={6}>
                <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
                <input
                    
                    className="user-register"
                    style={{marginTop:'6px'}}
                    placeholder='Category'
                    type="text"
                    {...register('category', {
                    required: true,
                    })}
                />
                {errors.category && "Please enter the product category"}
                </div>
                    
                </Grid>
                <Grid item xs={6}>
                <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
                <input
                    
                    className="user-register"
                    style={{marginTop:'6px'}}
                    placeholder='Product Stock'
                    type="number"
                    {...register('stock', {
                    required: true,min:0,

                    })}
                />
                {errors.stock && "Please enter the num of stock"}
                </div>
                </Grid>
                <Grid item xs={6}>
                <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
                <input
                    
                    className="user-register"
                    style={{marginTop:'6px'}}
                    placeholder='Price'
                    type="number"
                    step="0.01"
                    {...register('price', {
                    required: true,min:0,

                    })}
                />
                {errors.price && "Please enter the product price"}
                </div>

                </Grid>
                <Grid item xs={6}>
                <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
                <input
                    
                    className="user-register"
                    style={{marginTop:'6px'}}
                    placeholder='Shipping Cost'
                    type="number"
                    step="0.01"
                    {...register('shipping', {
                    required: true,min:0,

                    })}
                />
                {errors.shipping && "Please enter the shipping cost"}
                </div>

                </Grid>
                <Grid item xs={6}>
                
                <CustomizedBox 
                  sx={{
                    mt:1,
                    border: 1,
                    borderRadius: 1,
                    padding:1,
                    display: 'flex',
                  }}
                >
                  <Rating
                    name="hover-feedback"
                    value={rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                  {rating !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
                  )}
                </CustomizedBox>
                
                </Grid>
                <Grid item xs={6}>
                <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
                <input
                    defaultValue={0 || ''}
                    className="user-register"
                    style={{marginTop:'6px'}}
                    placeholder='Rating Count'
                    type="number"
                    {...register('starCount', {
                    required: true,min:0,

                    })}
                />
                {errors.starCount && "Please enter the num of rating people"}
                </div>   

                </Grid>
            </Grid>


           { 
            inputList.map( (x,i)=>{
             // console.log(x.discription,i);
            return(
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{my:1}} key={Math.random()}>
           
              <Grid item xs={9}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={Math.random()}>

                  <Grid item xs={6}>
                    
                    <TextField
                    className='user-register'
                    fullWidth
                    size='small'
                    required
                    type="text"
                    defaultValue={x.discription || ''}
                    id="outlined-required"
                    label="Features Key"
                    //  variant="standard"
                    name="discription"
                    onBlur={(e)=>handleOnBlur(e,i)}

                    />

                  </Grid>

                  <Grid item xs={6}>

                    <TextField
                    fullWidth
                    size='small'
                    required
                    type="text"
                    id="outlined-required"
                    label="Features Value"
                    defaultValue={x.value || ''}
                   // variant="filled"
                    name="value"
                    onBlur={(e)=>handleOnBlur(e,i)}

                    />

                    </Grid>

                </Grid>

              </Grid>
                <Grid item xs={3} >
                  <Box sx={{display:{xs:'colum',sm:'flex'}}}>
                    {
                    inputList.length!==1 &&
                    <Button size='small'  variant="outlined" color="error" onClick={()=> handleremove(i)}>Remove</Button>
                    }
                    { inputList.length-1===i &&
                    <Button  size='small'  variant='contained' color='warning' sx={{ml:1}} onClick={ handleaddclick}>Add More</Button>
                    }
                  </Box>
                </Grid>
              </Grid>
              );
             }
            )} 

            

            <div style={{color:'red',fontSize:'13px',textAlign:'start',marginTop:'4px'}}>
            <input
                required
                accept="image/*"
                className="user-register"
                style={{marginTop:'6px'}}
                placeholder='Product Photo'
                type="file"
                onChange={(e)=>setImage(e.target.files[0])}
                // {...register('image', {
                // required: true,

                // })}
            />
            {/* {errors.image && "Please enter the product photo"} */}
            </div>
            

            {/* <input className='register' type="submit" value="Add Product" /> */}
            <Button sx={{py:1.5,mt:2}} fullWidth variant='contained' color='secondary' type='submit'>Add Product</Button>

          </form>
     
        </div>
    );
};

export default AddProduct;

