import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import logo from  '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';
import {  NavHashLink } from 'react-router-hash-link';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img style={{width: '60px'}} src={logo} alt="" />
                    <Typography variant="h6" component="div" sx={{ mx: 3 }}>
                        Time Master
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <NavHashLink to="/home#watchCollection" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Best Collections</Button></NavHashLink>
                    <Link to="/reviews" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Reviews</Button></Link>
                    </Box>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Link to="/explore" style={{textDecoration: 'none', color: 'white'}}><Button color="inherit">Explore</Button></Link>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;