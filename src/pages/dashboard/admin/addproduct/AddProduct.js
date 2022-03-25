import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import '../../../../components/authentication/userregister/UserRegister.css';



const AddProduct = () => {

    const [fBoxs,setFBoxs]=useState([1]);
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

  const onSubmit = data => {
    
    const features=[];

    for (const iterator of fBoxs) {
        // const feature=description:{`${data.description}${iterator}`},value:{`${data.value}${iterator}`};

        const d=data.description1;
        console.log(d);
        // if(iterator){
        //     let des=`${data.description${iterator}}`;
        //    if(des){
        //     console.log(data.des);
        // }

        // }else{
        //     console.log('error');
        // }
        
        
       
        // features.push(feature);
        
    }
    console.log(features);
    console.log(data.description1,data.value1);
    



    // const product={name:data.name,seller:data.seller,price:data.price,shipping:data.shipping,category:data.category,stock:data.stock,star:data.star,starCount:data.starCount,features:features,image:data.image}
    
    // console.log(features);
  };

    const handleAddFeatures=()=>{

        const addOne=fBoxs.length+1;
        const newBox=[...fBoxs,addOne];
        setFBoxs(newBox);  
        
    }

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

            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={Math.random()}>

            <Grid item xs={10}>
            {fBoxs.map(fbox=>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={Math.random()}>

            <Grid item xs={5} >
            <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
            <input
                
                className="user-register"
                style={{marginTop:'6px'}}
                placeholder='Features Key'
                type="text"
                {...register(`description${fbox}`, {
                required: true,

                })}
            />
            {errors.description && "Please enter the product photo"}
            </div>
                
            </Grid>

            <Grid item xs={5} key={Math.random()}>
            <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
            <input
                
                className="user-register"
                style={{marginTop:'6px'}}
                placeholder='Features Value'
                type="text"
                {...register(`value${fbox}`, {
                required: true,

                })}
            />
            {errors.value && "Please enter the product photo"}
            </div>

            </Grid>
            </Grid>
            )}
            </Grid>

            <Grid item xs={2} >
            <Button sx={{mt:1}} variant='contained' onClick={handleAddFeatures}>More Features</Button>
            </Grid>
           </Grid> 

            

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

            <input className='register' type="submit" value="Add Product" />

          </form>
     
        </div>
    );
};

export default AddProduct;


