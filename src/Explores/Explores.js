import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explore, setExplore] = useState([]);
    const [orderSuccess, setOredrSuccess] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:5000/explore')
        .then(res => res.json())
        .then(data => setExplore(data))
    },[]);
    return (
        <Box>
            <h3>Explore Our Best Collections</h3>
            {orderSuccess && <Alert severity="success">Order Places Successfully !!!</Alert>}
        <div id= "service-container">
                {
                    explore.map(explore => <Explore
                    key={explore._id}
                    explore={explore}
                    setOredrSuccess={setOredrSuccess}
                    >
                    </Explore>)
                }
            </div>
        </Box>
    );
};

export default Explores;