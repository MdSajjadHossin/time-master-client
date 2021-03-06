import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import OrderModal from '../Pages/OrderModal/OrderModal';
import ReviewModal from '../Reviews/ReviewModal/ReviewModal';


const Explore = ({explore, setOredrSuccess}) => {
    const{name, img, price, description} = explore;
    const [openOrder, setOpenOrder] = React.useState(false);
    const [openReview, setOpenReview] = React.useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);
    const handleReviewOpen = () => setOpenReview(true);
    const handleReviewClose = () => setOpenReview(false);
    return (
        <>
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
                <Button onClick={handleOrderOpen} size="small">Oredr</Button>
                <Button onClick={handleReviewOpen} size="small">Review Item</Button>
            </CardActions>
            </Card>
        </Box>
        <OrderModal
        explore={explore}
        handleOrderClose={handleOrderClose}
        openOrder={openOrder}
        setOredrSuccess={setOredrSuccess}
        ></OrderModal>
        <ReviewModal
        explore={explore}
        handleReviewClose={handleReviewClose}
        openReview={openReview}
        setReviewSuccess={setOpenReview}
        >
        </ReviewModal>
        </>
    );
};

export default Explore;