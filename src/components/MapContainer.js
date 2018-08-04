import React, { Component } from 'react';
import Map from './Map'
import SideBar from './SideBar'


export default class MapContainer extends Component {

    render() {
        const { google, currentMarker, places, updateQuery} = this.props;

        return (
            <div className="map-container">
                <SideBar 
                    places={places} 
                    updateQuery={updateQuery}
                />
                <main role="application" aria-label="Map showing flower places" className="main-container">
                    <Map
                        google={google}
                        currentMarker={currentMarker}
                    />
                </main>
            </div>
        )
    }
} 