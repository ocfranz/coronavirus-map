import React from 'react';
import styled, { css } from 'styled-components'
import ReactMapGL, {Marker} from 'react-map-gl';
import { useState } from 'react';

const MapStyle = styled.div`
    width: 100%;
    height: 100%;
`

const Map = ({data})=>{
    const [ viewport, setViewport ] = useState({ width: '100%',height: '100%',latitude: 0, longitude:0, zoom: 2})
    const TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
    
    
    const handleMapChange = (viewport)=>{
        setViewport(viewport);
    }
    const setMarkers = (data) => {
        let markers = [];
        data.map((item, index)=>{
           
            markers.push(
                <Marker 
                key={index} 
                latitude={item.attributes.Lat} 
                longitude={item.attributes.Long_}>
                    <span>{item.attributes.Country_Region}</span>
                </Marker>
            )
        });
        return markers;
    }   
    return(
        <MapStyle>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={TOKEN}
            onViewportChange={(viewport) => handleMapChange(viewport)}
            >
                {
                    setMarkers(data)
                }
            </ReactMapGL>
        </MapStyle>
    );
}

export default Map;

