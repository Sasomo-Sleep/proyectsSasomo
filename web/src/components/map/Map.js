import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
const Map = ({ propertiesSearched }) => {

    const [viewport, setViewport] = useState()
    const [selectedLocation, setSelectedLocation] = useState()

    useEffect(() => {
        const coordinates = propertiesSearched?.map((result) => ({
            latitude: result?.location[0],
            longitude: result?.location[1]
        }))

        const center = getCenter(coordinates)

        setViewport({
            latitude: center?.latitude,
            longitude: center?.longitude,
            zoom: 11
        })

    }, [propertiesSearched])

    if (!viewport) return <> </>


    return (
        <ReactMapGL
            mapStyle="mapbox://styles/kientk/cktouhjzv0g2t19o630en6d4d"
            mapboxApiAccessToken="pk.eyJ1Ijoia2llbnRrIiwiYSI6ImNrdG91ZW13YTAzengydW42ZnM3MGVpMmsifQ.CfbBsg0rF-o6XHooQuimRg"
            {...viewport}
            width="100%"
            height="300px"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

            {propertiesSearched?.map(result => {
                return (<div key={result.id}>
                    <Marker
                        latitude={result.location[0]}
                        longitude={result.location[1]}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            role="img"
                            onClick={() => setSelectedLocation(result)}
                            aria-label="push-pin"
                        >
                            <i className="fas fa-hand-point-down"
                                style={{ "color": "red" }}></i>

                        </p>
                    </Marker>

                    {selectedLocation?.location[0] === result.location[0] ? (
                        <Popup
                            closeOnClick={true}
                            latitude={result.location[0]}
                            longitude={result.location[1]}
                        >
                            {result.name}
                        </Popup>
                    ) : (
                        false
                    )}

                </div>
                )
            })}
        </ReactMapGL>

    );
};

export default Map;
