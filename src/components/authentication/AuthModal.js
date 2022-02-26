import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import AuthTab from './authtab/AuthTab';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const AuthModal = ({open,handleClose,location}) => { 
  // console.log(state);

  return (
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

            <IconButton onClick={handleClose} sx={{float:'right'}} aria-label="delete">
                  <ClearIcon sx={{color:'crimson'}}/>
            </IconButton>
          
            <AuthTab location={location}></AuthTab>
          </Box>
        </Fade>
      </Modal>
    
  );
};

export default AuthModal;