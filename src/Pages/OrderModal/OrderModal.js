import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Button, Fade, TextField } from '@mui/material';
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

const OrderModal = ({openOrder, handleOrderClose, explore, setOredrSuccess}) => {
    const {user} = useAuth();
    const {name, price} = explore;

    const initialInfo = {userName: user.displayName, email: user.email }
    const [OrderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...OrderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
      }

    const handleOrderSubmit = e => {
        //collecting data
        const order = {
            ...OrderInfo,
            productName: name,
            price
        }
        //sending data to server
        fetch('https://stormy-cliffs-56449.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setOredrSuccess(true);
                handleOrderClose();
            }
        })



        
        e.preventDefault();
    }
    
    return (
      <>
        <Modal
        open={openOrder}
        onClose={handleOrderClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Fade in={openOrder}>
        <Box sx={style}>
          <form onSubmit={handleOrderSubmit}>
          <TextField 
          defaultValue={user.email}
          sx={{width: '90%'}}
          id="standard-basic" 
          name="yourEmail"
          onBlur={handleOnBlur}
          label="Email" 
          variant="standard" />
          <br />
          <TextField 
          defaultValue={user.displayName}
          sx={{width: '90%'}}
          id="standard-basic" 
          name="yourName"
          onBlur={handleOnBlur}
          label="Your Name" 
          variant="standard" />
          <br />
          <TextField 
          defaultValue="Phone Number"
          sx={{width: '90%'}}
          id="standard-basic" 
          name="yourPhone"
          onBlur={handleOnBlur}
          label="Phone" 
          variant="standard" />
          <br />
          <TextField 
          disabled
          defaultValue={name}
          sx={{width: '90%'}}
          id="standard-basic"
          name="productName" 
          label="Product Name" 
          variant="standard" />
          <br />
          <TextField 
          disabled
          defaultValue={price}
          sx={{width: '90%'}}
          id="standard-basic"
          name="price" 
          label="Price" 
          variant="standard" />
          <Button variant="contained" color="success" type="submit" sx={{my:2}}>Place Order</Button>
          </form>
        </Box>
        </Fade>

      </Modal>
      </>
    );
};

export default OrderModal;