import React,{useState, useEffect} from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');

    const changeColor = () =>{
        setFavoriteColor('blue');
    }

    useEffect (()=> {
        alert("useEffect reached")
    }, [favoriteColor])

    return (
        <div>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={changeColor}>Change Favorite Color</button>
        </div>
    )
}

export default Color;