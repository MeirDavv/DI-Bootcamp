import React, { useState } from 'react';

const Events = () => {

    const [isToggleOn, setIsToggleOn] = useState(true);
    const clickMe = () => {
        alert('I was clicked');
    };
    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            alert(`Enter key was presseed, your input is ${event.target.value}`);
        }
    };
    const handleOnOff = () => {
        if(isToggleOn === true){
            setIsToggleOn(false);
        }
        else{
            setIsToggleOn(true);
        }
    };
    return(
        <div>
            <button onClick={clickMe}>Click me</button>
            <input onKeyDown={handleKeyDown} type="text" placeholder="Press the ENTER key!" />
            <button onClick={handleOnOff}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </div>

    )
}

export default Events;