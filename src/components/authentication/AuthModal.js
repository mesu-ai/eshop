import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import AuthTab from './authtab/AuthTab';

// import ClearIcon from '@mui/icons-material/Clear';
// import { IconButton } from '@mui/material';

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

const AuthModal = ({open,handleClose}) => { 

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

            <Typography id="transition-modal-description" sx={{  }}>
              <AuthTab></AuthTab>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    
  );
};

export default AuthModal;