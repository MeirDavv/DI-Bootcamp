const UserFavoriteAnimals = (props) => {
    const favAnimals = props.article;
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