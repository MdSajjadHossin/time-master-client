import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ManageProduct = ({order, setOrders, orders}) => {
    const {name, img, price, description} = order;
    const handleDeleteOrder = id =>{
        const procced = window.confirm('Are You Sure, You Want To DELETE');
        if(procced){
            const url =`http://localhost:5000/explore/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                const remainingProducts = orders.filter(orders => orders._id !== id);
                setOrders(remainingProducts);
            }
        })
        }
            
    }
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
            <Button onClick={() => handleDeleteOrder(order._id)} sx={{my: 3}} variant="outlined" color="error">Cancel Order</Button>
            </Card>
        </Box>
    );
};

export default ManageProduct;