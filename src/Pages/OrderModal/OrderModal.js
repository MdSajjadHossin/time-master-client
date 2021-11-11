import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

const OrderModal = ({openOrder, handleOrderClose, explore}) => {
    const {user} = useAuth();
    const {name, price} = explore;

    const handleOrderSubmit = e => {
        alert('Submitting');

        handleOrderClose();
        e.preventDefault();
    }
    
    return (
        <Modal
        open={openOrder}
        onClose={handleOrderClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleOrderSubmit}>
          <TextField 
          disabled
          defaultValue={user.email}
          sx={{width: '90%'}}
          id="standard-basic" 
          label="Standard" 
          variant="standard" />
          <br />
          <TextField 
          disabled
          defaultValue={name}
          sx={{width: '90%'}}
          id="standard-basic" 
          label="Standard" 
          variant="standard" />
          <br />
          <TextField 
          disabled
          defaultValue={price}
          sx={{width: '90%'}}
          id="standard-basic" 
          label="Standard" 
          variant="standard" />
          <Button variant="contained" color="success" type="submit" sx={{my:2}}>Place Order</Button>
          </form>
        </Box>
      </Modal>
    );
};

export default OrderModal;