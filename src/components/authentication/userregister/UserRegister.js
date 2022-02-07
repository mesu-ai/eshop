import React from 'react';
import './UserRegister.css';
import { useForm } from "react-hook-form";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import google from '../../../images/login/google.png';

const UserRegister = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <>
        <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
        
          <input
            className="user-register"
            placeholder='Name'
            type="text"
            {...register('name', { required: true, maxLength: 80 })}
          />
       
        
        
          <input
            className="user-register"
            placeholder='Email Address'
            type="text"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        
        
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
      
  
        <input className='register' type="submit" value="Create Account" />

      </form>

      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
          <p className='left'></p>
          <Typography variant='subtitle1' sx={{textAlign:'center'}}>
            Or Continue With
          </Typography>
          <p className='right'></p>
      </Box>

      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
          <img  src={google} alt="" style={{width:'90px',marginTop:'10px'}}/>
      </Box>






      {/* <Typography variant='subtitle1' sx={{textAlign:'center'}}>
      By creating an account, you agree to the Membership Agreement and Privacy Policy
      </Typography> */}




      </>


    );
};

export default UserRegister;