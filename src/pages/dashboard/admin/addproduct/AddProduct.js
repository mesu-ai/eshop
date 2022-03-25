import { Grid } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../../components/authentication/userregister/UserRegister.css';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
  const onSubmit = data => console.log(data);


    return (
        <div >
           <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      
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
            <div style={{color:'red',fontSize:'13px',textAlign:'start'}}>
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