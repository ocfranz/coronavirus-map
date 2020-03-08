import React, { useState, useEffect } from "react";
import Axios from 'axios';
import {GlobalStyle} from '../styles/gobal'; 

import Button from '../components/Button';
import Map from '../modules/Map';

const Home = ()=> {
    const API_URL = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed > 0&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed desc&resultOffset=0&resultRecordCount=100&cacheHint=true';

    const [ data, setData ] = useState([]);
    const [ statistics, setStatistics ] = useState({ infected : 0, deaths: 0, recovered : 0})

    useEffect(()=>{
        Axios.get(API_URL)
            .then(response => {
                console.log(response.data.features);
                let confirmed = 0;
                let deaths = 0;
                let recovered = 0;
                response.data.features.map((item)=>{
                    confirmed += item.attributes.Confirmed;
                    deaths += item.attributes.Deaths;
                    recovered += item.attributes.Recovered;
                })
                console.log(confirmed, 'DEATH ', deaths, 'recovered', recovered);
                setData(response.data.features);
            })
            .catch(err => console.error(err));
    }, [])
    
    return (
        <div className="page">
            <GlobalStyle />
            <Map data={data}>
            </Map>
        
            <p>Welcome to the ReactJS and ExpressJS generator</p>
            {
                data.map((item)=>{
                    return(
                        <span>{item.attributes.Country_Region}</span>
                    )
                })
            }
        </div>
    );
}

export default Home;
