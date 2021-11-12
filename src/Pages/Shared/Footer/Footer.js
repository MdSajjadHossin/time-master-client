import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo.png';
import { Box } from '@mui/system';

const Footer = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt}/>
    const email = <FontAwesomeIcon icon={faEnvelope}/>
    const phone = <FontAwesomeIcon icon={faPhoneSquareAlt}/>
    return (
        <>
        <Box sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{m:3, color: 'white'}}>
            <img id="footer-logo" src={logo} alt="" />
            <h1>Time Master</h1>
        </Box>
        <Box sx={{m:3, color: 'white'}}>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Vision & Mission</p>
            <p>Leadership</p>
            <p>Careers</p>
            <p>News & Article</p>
        </Box>
        <Box sx={{m:3, color: 'white'}}>
            <h3>Support</h3>
            <p>Help Center</p>
            <p>FAQ</p>
            <p>Contact Us</p>
            <p>Ticket</p>
            <p>Get an Appointment</p>
        </Box>
        <Box sx={{m:3, color: 'white'}}>
            <h3>Contact Info</h3>
            <p>{location} Magura Collage Road</p>
            <p>{email} bookmyholiday@gmail.com</p>
            <p>{phone} + 0081948983498</p>
        </Box>
        </Box>
        </>
    );
};

export default Footer;