import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Explore = ({explore}) => {
    const{name, img, price, description} = explore;
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
                <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor: 'red', color: 'white', fontWeight: 'bold', borderRadius: 1}}>
                Name: {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor: 'green', color: 'white', fontWeight: 'bold', borderRadius: 1 }}> 
                Price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{border: 3, borderRadius: 2}}>
                Descriotion: {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Oredr</Button>
                <Button size="small">Review Item</Button>
            </CardActions>
            </Card>
        </Box>
    );
};

export default Explore;