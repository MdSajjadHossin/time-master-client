import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explore, setExplore] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/explore')
        .then(res => res.json())
        .then(data => setExplore(data))
    },[]);
    return (
        <Box>
            <h3>Explore Our Best Collections</h3>
        <div id= "service-container">
                {
                    explore.map(explore => <Explore
                    key={explore._id}
                    explore={explore}
                    >

                    </Explore>)
                }
            </div>
        </Box>
    );
};

export default Explores;