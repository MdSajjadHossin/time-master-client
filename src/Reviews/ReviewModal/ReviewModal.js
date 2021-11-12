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

const ReviewModal = ({openReview, handleReviewClose, explore, setReviewSuccess}) => {
    const {user} = useAuth();
    const {name, price} = explore;

    const initialInfo = {userName: user.displayName, email: user.email }
    const [reviewInfo, setReviewInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...reviewInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setReviewInfo(newInfo);
      }

    const handleOrderSubmit = e => {
        //collecting data
        const order = {
            ...reviewInfo,
            productName: name,
            price
        }
        //sending data to server
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setReviewSuccess(true);
                handleReviewClose();
            }
        })



        
        e.preventDefault();
    }
    return (
        <Modal
        open={openReview}
        onClose={handleReviewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Fade in={openReview}>
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
          label="User Name" 
          variant="standard" />
          <br />
          <TextField 
          defaultValue="Rate on scle of 5"
          sx={{width: '90%'}}
          id="standard-basic" 
          name="rating"
          onBlur={handleOnBlur}
          label="Rating" 
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
          variant="standard" /><br/>
          <TextField
          id="filled-multiline-static"
          sx={{width: '90%'}}
          label="Comment"
          multiline
          rows={2}
          defaultValue="Comment Here"
          onBlur={handleOnBlur}
          name="comment"
          variant="filled"
        /><br/>
          <Button variant="contained" color="success" type="submit" sx={{my:2}}>Submit</Button>
          </form>
        </Box>
        </Fade>

      </Modal>
    );
};

export default ReviewModal;