import React from 'react';
import UrlSet from '../component/UrlSet';
import Head from '../component/Header';
import Foot from '../component/Footer';

function Home(){

    return(
    <div>
        <Head />
        <UrlSet />
        <Foot />
    </div>
    );
}

export default Home;