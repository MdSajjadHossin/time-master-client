import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../Dashboard/Order/Order';

const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <>
            <h3>Orders: {orders.length}</h3>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    orders.map(order => <Order
                    key={order._id}
                    order={order}
                    setOrders={setOrders}
                    orders={orders}
                    >
                    </Order> )
                }
            </Grid>
        </>
    );
};

export default Orders;