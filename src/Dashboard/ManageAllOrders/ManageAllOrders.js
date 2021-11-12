import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() =>{
        const url = `https://stormy-cliffs-56449.herokuapp.com/orders`
        fetch(url)
        .then(res => res.json())
        .then(data => setManageOrders(data))
    },[])
    return (
        <>
            <h3>Orders: {manageOrders.length}</h3>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    manageOrders.map(order => <ManageAllOrder
                    key={order._id}
                    order={order}
                    setOrders={setManageOrders}
                    orders={manageOrders}
                    >
                    </ManageAllOrder> )
                }
            </Grid>
        </>
    );
};

export default ManageAllOrders;