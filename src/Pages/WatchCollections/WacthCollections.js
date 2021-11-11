import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import WatchCollection from '../../WatchCollection/WatchCollection';
import './WatchCollections.css';

const WacthCollections = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div id="watchCollection">
            <Box sx={{ flexGrow: 1 }}>
                <h2>Watch Collections</h2>
                <div id= "service-container">
                {
                    services.map(service => <WatchCollection
                    key={service._id}
                    service={service}
                    >

                    </WatchCollection>)
                }
                </div>
            </Box>
        </div>

    );
};

export default WacthCollections;
