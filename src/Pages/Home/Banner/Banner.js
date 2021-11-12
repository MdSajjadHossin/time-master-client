import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/bg-8.jpg';
import { Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



const bannerBg = {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    height: '500px',
    width: 'auto',
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <div>
            <Box style={bannerBg}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{color: 'white', fontWeight: 'bold', my: '5px', mx: '20px', px: '5px'}} variant="h5">
                        Time you enjoy wasting<br />
                        </Typography>
                        <Typography sx={{color: 'white', fontWeight: 'bold', my: '5px', mx: '20px', px: '5px'}} variant="h6">
                        is not wasted time. <br />
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5, fontSize: 18, fontWeight: 400, color: 'white', mx: '20px' }}>
                            We care about your valuable time. So to value your pracious time you need to be monitor your time.
                            we can help you to do that, We provide you the latest smart and analog watches available in the market.
                            Pick the watch of your choise now.
                        </Typography>
                        <Link to="/explore" style={{textDecoration: 'none'}}><Button variant="contained" style={{ backgroundColor: 'blue', margin: '5px', padding: '20px' }}>Watch Collection</Button></Link>
                    </Box>
            </Grid>
            </Box>
        </div>
    );
};

export default Banner;