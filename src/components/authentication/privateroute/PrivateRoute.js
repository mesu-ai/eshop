import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate,Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AuthModal from '../AuthModal';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth();
    const location=useLocation();
     const navigate=useNavigate();

    const [open, setOpen] = React.useState(true);
    // const handleOpen = () => setOpen(true);
   
    const handleClose = () =>{
        setOpen(false);
          navigate(-1);
       

    } ;
    
    

    if(isLoading){
        return <CircularProgress/>
    }

    return (

       user.email? children:  <AuthModal open={open} handleClose={handleClose}></AuthModal>  
       
       
    //    <Navigate to="/login" state={{from:location}} replace/>
       
      
    );
    

    
};

export default PrivateRoute;