import React from "react";

const Hello = (props) => {
    console.log(props)
    return(
        <>
            <h1>Hi from Hello component {props.title}</h1>
            <h2>Sub title {props.sub} </h2>
        </>

    )
}

export default Hello