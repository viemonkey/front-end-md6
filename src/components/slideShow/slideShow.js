import React, { useEffect, useState } from 'react';
import './slideShow.css';

export default function SlideShow() {


    return (
        <div>
            <h1><small>Fullscreen</small> Ken Burns effect <small>without javascript</small></h1>
            {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
            <div className="slideshow">
                <div className="slideshow-image" style={{backgroundImage: 'url("https://source.unsplash.com/category/nature/1600x1400")'}} />
                <div className="slideshow-image" style={{backgroundImage: 'url("https://source.unsplash.com/category/buildings/1600x1400")'}} />
                <div className="slideshow-image" style={{backgroundImage: 'url("https://source.unsplash.com/category/food/1600x1400")'}} />
                <div className="slideshow-image" style={{backgroundImage: 'url("https://source.unsplash.com/category/technology/1600x1400")'}} />

            </div>

        </div>

    );
}
