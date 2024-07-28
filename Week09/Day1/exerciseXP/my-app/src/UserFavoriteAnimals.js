import React from 'react';


const UserFavoriteAnimals = (props) => {
    const favAnimals = props.favAnimals;
    console.log(favAnimals);
    return(
        <div>
            <ul> Favorite animals:
                {
                    favAnimals.map((animal,index)=>{
                        return <li key={index}>{animal}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default UserFavoriteAnimals;