import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate,Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AuthModal from '../AuthModal';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth();
    const location=useLocation();
     const navigate=useNavigate();
     const state={from:location}

    const [open, setOpen] = React.useState(true);
    // const handleOpen = () => setOpen(true);
   
    const handleClose = () =>{
        setOpen(false);
          navigate(-1);
       

    } ;
    
    

    if(isLoading){
        return <CircularProgress/>
    }

    const redirect=()=>{
        
        return  <AuthModal open={open}  handleClose={handleClose} state></AuthModal>;


    }

    return (

       user.email? children:   
          redirect()
     
      
    // <Navigate to="/login" state={{from:location}} replace/>
      
    );
    

    
};

export default PrivateRoute;