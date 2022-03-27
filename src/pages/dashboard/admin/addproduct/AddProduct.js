import React, { useState } from 'react';
import { Button, Grid, Typography,TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import '../../../../components/authentication/userregister/UserRegister.css';
import { Box } from '@mui/system';



const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const [inputList, setinputList]= useState([{discription:'', value:''}]);

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
  
    const product={name:data.name,seller:data.seller,price:data.price,shipping:data.shipping,category:data.category,stock:data.stock,star:data.star,starCount:data.starCount,features:inputList,image:data.image}
    
     console.log(product);
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
                    required: true,

                    })}
                />
                {errors.stock && "Please enter the product stock"}
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
                    required: true,

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
                    placeholder='Shipping Rate'
                    type="number"
                    step="0.01"
                    {...register('shipping', {
                    required: true,

                    })}
                />
                {errors.shipping && "Please enter the shipping rate"}
                </div>

                </Grid>
                <Grid item xs={6}>
                <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
                <input
                    
                    className="user-register"
                    style={{marginTop:'6px'}}
                    placeholder='Product Rating'
                    type="number"
                    {...register('star', {
                    required: true,

                    })}
                />
                {errors.star && "Please enter the rating number"}
                </div>
                    
                

                </Grid>
                <Grid item xs={6}>
                <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
                <input
                    
                    className="user-register"
                    style={{marginTop:'6px'}}
                    placeholder='Rating Count'
                    type="number"
                    {...register('starCount', {
                    required: true,

                    })}
                />
                {errors.starCount && "Please enter the rating counter"}
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
                
                className="user-register"
                style={{marginTop:'6px'}}
                placeholder='Product Photo'
                type="file"
                {...register('image', {
                required: true,

                })}
            />
            {errors.image && "Please enter the product photo"}
            </div>
            

            {/* <input className='register' type="submit" value="Add Product" /> */}
            <Button sx={{py:1.5,mt:2}} fullWidth variant='contained' color='secondary' type='submit'>Add Product</Button>

          </form>
     
        </div>
    );
};

export default AddProduct;


