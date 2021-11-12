import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from  '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';
import {  NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 , width:1}}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{display: 'inherit'}}>
                    <img style={{width: '60px'}} src={logo} alt="" />
                    <Typography variant="h6" component="div" sx={{ mx: 3 }}>
                        Time Master
                    </Typography>
                    <NavHashLink to="/home#watchCollection" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Best Collection</Button></NavHashLink>
                    <NavHashLink to="/home#bestSelling" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Best Selling</Button></NavHashLink>
                    <Link to="/reviews" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Reviews</Button></Link>
        
                    {
                        user?.email ?
                            <div>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Link to="/explore" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Explore</Button></Link>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </div>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;