import React from 'react';
import UrlFilter from '../component/UrlFilter';
import { useParams } from 'react-router-dom';
import Head from '../component/Header';
import Foot from '../component/Footer';
import './Overview.css'

function Overview(){
    const params = useParams();
console.log(params);

    return(
    <div>
    <Head />
    <UrlFilter id = {params} />
    <Foot />
    </div>
    );
}

export default Overview;