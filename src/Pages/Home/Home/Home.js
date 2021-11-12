import React from 'react';
import Reviews from '../../../Reviews/Reviews';
import BestCellingWatch from '../../BestCellingWatch/BestCellingWatch';
import Footer from '../../Shared/Footer/Footer';
import WacthCollections from '../../WatchCollections/WacthCollections';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WacthCollections></WacthCollections>
            <BestCellingWatch></BestCellingWatch>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;