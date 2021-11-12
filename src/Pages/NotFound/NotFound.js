import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.jpg';

const NotFound = () => {
    return (
        <Box>
            <Box sx={{width: 'auto'}}>
            <img style={{width: '400px', margin: '10px'}} src={notFound} alt="" /><br />
            </Box>
            <Link style={{textDecoration: 'none'}} to="/">
            <Button variant="contained" sx={{ m:3, p:2}}>Go Home</Button>
            </Link>
        </Box>
    );
};

export default NotFound;