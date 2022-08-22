/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
    return (
        <div className="flex w-screen h-screen">
            <iframe 
                style={{ width: "100%", height: "1200px" }} 
                src="https://maps.google.com/maps?q=buffalo%20metrol%20municipality&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0">
            </iframe>
        </div>
    )
}

export default Map;
