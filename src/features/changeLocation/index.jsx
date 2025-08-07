import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from '@phosphor-icons/react';
import CurrentCity from '../cityName';

import "./style.css";

// Leaflet marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function ChangeLocation() {
    const [showMap, setShowMap] = useState(false);
    const [marker, setMarker] = useState(() => {
        const saved = JSON.parse(window.localStorage.getItem("location"));
        return saved ? { lat: saved.lat, lng: saved.lon } : null;
    });

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                const newLocation = {
                    lat: e.latlng.lat,
                    lon: e.latlng.lng
                };
                setMarker({ lat: newLocation.lat, lng: newLocation.lon });
                window.localStorage.setItem("location", JSON.stringify(newLocation));
                setShowMap(false);
            },
        });
        return null;
    };

    return (
        <div className='changeLocation'>
            <button onClick={() => setShowMap(true)}>
                <MapPin weight="bold" className="icon" />
                <CurrentCity />
            </button>

            {showMap && (
                <>
                    <div className="overlay" onClick={() => setShowMap(false)}></div>

                    <div className='map'>
                        <MapContainer center={marker || [41.3, 69.2]} zoom={13} style={{ width: '100%', height: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OSM</a>'
                            />
                            <MapClickHandler />
                            {marker && <Marker position={marker} />}
                        </MapContainer>
                    </div>
                </>
            )}
        </div>
    );
};
