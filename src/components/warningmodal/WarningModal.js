import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fade, IconButton } from '@mui/material';

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

const WarningModal = ({id,open,handleClose,handleDelete}) => {
   
//   const {_id}=product;
  
  console.log(id);
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


        <IconButton onClick={handleClose}  sx={{float:'right'}} variant="contained" color="error" aria-label="remove from shopping cart" title='Cancle'>
           <ClearIcon  sx={{color:'crimson'}}/>
        </IconButton>
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Delete the order
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Order will be cancled from order
          </Typography>
          <Box sx={{mt:3,float:'right'}}>
            <Button onClick={handleClose} variant="contained" color="secondary">
            NO
            </Button>
            <Button onClick={()=>handleDelete(id)} variant="contained" color="error" sx={{ml:1}}>
            Delete
            </Button>

          </Box>
          </Box>
        </Fade>
      </Modal>
    );
};

export default WarningModal;