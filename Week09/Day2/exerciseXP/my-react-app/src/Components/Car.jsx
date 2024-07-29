import React from 'react';
import { useState } from 'react';
import Garage from './Garage';

const Car = (props) => {
    const [color, setColor] = useState('Black');
    return (
        <div>
            <h1>This car is model a {color} {props.carinfo.model}</h1>
            <Garage size="small" />
        </div>
    );
}

export default Car;