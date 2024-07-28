import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import hongKong from './assets/hong-kong.jpg';
import macau from './assets/macau.webp';
import japan from './assets/japan.webp';
import lasVegas from './assets/las-vegas.webp';

class CarouselDemo extends Component {
    render(){
        return(
            <div style ={{maxWidth:'600px', margin:'0 auto'}}>
            <Carousel>
                <div>
                    <img src={hongKong} />
                    <p className="legend">Hong Kong 1</p>
                </div>
                <div>
                    <img src={macau}/>
                    <p className="legend">Macau</p>
                </div>
                <div>
                    <img src={japan} />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src={lasVegas} />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
            </div>

        );
    }

};

export default CarouselDemo;
