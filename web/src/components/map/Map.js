import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    })

    return (
            <ReactMapGL
            mapStyle="mapbox://styles/kientk/cktouhjzv0g2t19o630en6d4d"
            mapboxApiAccessToken="pk.eyJ1Ijoia2llbnRrIiwiYSI6ImNrdG91ZW13YTAzengydW42ZnM3MGVpMmsifQ.CfbBsg0rF-o6XHooQuimRg"
            {...viewport}
            width="100%"
            height="400px"
            onViewportChange={(nextViewport) => setViewport(viewport)}
        >
        </ReactMapGL>
        
    );
};

export default Map;