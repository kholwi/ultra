import React from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

const center = { lat: -25.731340, lng: 28.218370 }

const Map = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (!isLoaded) {
        return (
            <div className="w-60 h-24 border-2 rounded-md mx-auto mt-20">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                    <div className="w-12 bg-gray-300 h-12 rounded-full ">
                    </div>
                        <div className="flex flex-col space-y-3">
                        <div className="w-36 bg-gray-300 h-6 rounded-md ">
                        </div>
                        <div className="w-24 bg-gray-300 h-6 rounded-md ">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="relative items-center h-full w-full px-6 pt-4 pb-2">
        <GoogleMap center={center} zoom={15} 
            mapContainerStyle={{width: '100%', height: '100%'}}
        >
            <h1 className="w-full h-screen bg-zinc-200 flex flex-col justify-between">Map</h1>
        </GoogleMap>
    </div>
  )
}

export default Map
