import React from 'react';
import '../userregister/UserRegister.css';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import google from '../../../images/login/google.png';

const UserLogin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
      <>
      
      <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      
      
       <div style={{color:'red',fontSize:'13px'}}>
        <input
          className="user-register"
          style={{marginTop:'6px'}}
          placeholder='Email Address'
          type="text"
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.email && "Please enter a valid Email Address"}
        </div>
      
      <div style={{color:'red',fontSize:'13px'}}>
      <input
      className="user-register"
      placeholder='Password'
        type="password"
        {...register('password', {
          required: true,
          maxLength: 11,
          minLength: 8,
        })}
      />
      {errors.password && "Password Must be 6-12 characters"}
      </div>
    

      <input className='register' type="submit" value="Sign in" />

      </form>
      

    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:2}} >
        <span className='left'></span>
        <Typography variant='subtitle1' sx={{textAlign:'center'}} component="div">
          Or Continue With
        </Typography>
        <span className='right'></span>
    </Box>

    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <img  src={google} alt="" style={{width:'90px',marginTop:'10px'}}/>
    </Box>

      </>


    );
};

export default UserLogin;