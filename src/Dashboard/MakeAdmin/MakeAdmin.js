import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false)
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email}
        fetch('https://stormy-cliffs-56449.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
               'content-type': 'application/json' 
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setAdminSuccess(true);
                
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make  an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width: '30%'}}
            id="outlined-basic" 
            label="Email" 
            type="email"
            onBlur={handleOnBlur}
            variant="outlined" 
            /> <br />
            <Button sx={{my:1}} type="submit" variant="contained">Make Admin</Button>
            </form>
            {adminSuccess && <Alert severity="success">Admin Made Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;