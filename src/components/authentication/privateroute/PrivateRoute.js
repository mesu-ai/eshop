import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Router, useLocation } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { Navigate, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth();
    const location=useLocation();

    if(isLoading){
        return <CircularProgress/>
    }

    return (

       user.email? children: <Navigate to="/login" state={{from:location}} replace/>
       
      
    );
    

    
};

export default PrivateRoute;