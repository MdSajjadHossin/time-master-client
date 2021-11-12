import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../Dashboard/ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://stormy-cliffs-56449.herokuapp.com/explore')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[]);
    return (
        <Box>
        <h3>Explore Our Best Collections</h3>
        <div id= "service-container">
                {
                    orders.map(order => <ManageProduct
                    key={order._id}
                    order={order}
                    setOrders={setOrders}
                    orders={orders}
                    >
                    </ManageProduct>)
                }
            </div>
        </Box>
    );
};

export default ManageProducts;