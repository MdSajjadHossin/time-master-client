import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const WatchCollection = ({service}) => {
    const{name, img, price, description} = service;
    return (
        <Box sx={{m:1}}>
            <Card sx={{ Width: 345 }}>
            <CardMedia
                component="img"
                height="250"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Name: {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                Price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Descriotion: {description}
                </Typography>
            </CardContent>
            <CardActions>
                
                <Link to="/explore" style={{textDecoration: 'none'}}><Button size="small">Explore More</Button></Link>
            </CardActions>
            </Card>
        </Box>
    );
};

export default WatchCollection;