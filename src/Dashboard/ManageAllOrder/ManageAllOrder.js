import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const ManageAllOrder = ({order, setOrders, orders}) => {
    const {email} = useAuth();
    const {productName, price, userName, yourPhone } = order;
    const handleDeleteOrder = id =>{
        const procced = window.confirm('Are You Sure, You Want To DELETE');
        if(procced){
            const url =`https://stormy-cliffs-56449.herokuapp.com/orders/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                const remainingUsers = orders.filter(orders => orders._id !== id);
                setOrders(remainingUsers);
            }
        })
        }
            
    }
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 5, boxShadow: 0, justifyContent: 'center'  }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                    Product Name: {productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Price: {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    User Name: {userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Phone Number: {yourPhone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Email: {email}
                    </Typography>
                    <Button onClick={() => handleDeleteOrder(order._id)} sx={{my: 3}} variant="outlined" color="error">Cancel Order</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ManageAllOrder;