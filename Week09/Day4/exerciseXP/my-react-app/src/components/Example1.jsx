import React, {useState,useEffect} from "react";

const Example1 = () => {
    const [socialMedias, setSocialMedias] = useState([]);

    useEffect(()=>{
        fetch('/data2.json')
        .then(response => response.json())
        .then(data => setSocialMedias(data.SocialMedias))
    }, []);
    
    return(
        <ul>
            {socialMedias.map((socialMedia, index) => (
                <li key={index}>{socialMedia}</li>
            ))}
        </ul>
    )
}

export default Example1;