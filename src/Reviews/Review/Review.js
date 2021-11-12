import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { fontWeight } from '@mui/system';


const Review = ({review}) => {
    const {userName, productName, rating, email, comment} = review;
    return (
        <div>
            <Box>
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                {email}
                </Typography>
                <Typography variant="h5" component="div">
                {productName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Review by: {userName}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
                <Typography variant="body2">
                    Comments:  {comment}
                </Typography>
            </CardContent>
            </Card>
            </Box>
        </div>
    );
};

export default Review;