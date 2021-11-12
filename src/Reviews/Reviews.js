import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [review, setReview] = useState([]);
    const [reviewSuccess, setReviewSuccess] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data))
    },[]);
    return (
        <div id="reviews">
            <h3>This is Reviews</h3>
            <Box>
            {reviewSuccess && <Alert severity="success">Order Places Successfully !!!</Alert>}
            <div id= "service-container">
                {
                    review.map(review => <Review
                    key={review._id}
                    review={review}
                    setReviewSuccess={setReviewSuccess}
                    >
                    </Review>)
                }
            </div>
        </Box>
        </div>
    );
};

export default Reviews;