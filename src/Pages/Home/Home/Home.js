import React from 'react';
import Reviews from '../../../Reviews/Reviews';
import WacthCollections from '../../WatchCollections/WacthCollections';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WacthCollections></WacthCollections>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;