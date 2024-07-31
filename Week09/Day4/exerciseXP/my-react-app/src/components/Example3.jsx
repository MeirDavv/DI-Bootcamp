import React, {useState,useEffect} from "react";

const Example3 = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(()=>{
        fetch('/data2.json')
        .then(response => response.json())
        .then(data => setExperiences(data.Experiences))
    }, []);
    
    return(
        <div>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <img src={experience.logo} alt="" />
                    <br />
                    <a href={experience.url}>{experience.companyName}</a>
                    <h4>{experience.roles[0].title}</h4>
                    <p>{experience.roles[0].startDate}</p> <p>{experience.roles[0].location}</p>
                    <p>{experience.roles[0].description}</p>
                </div>
            ))}
        </div>
    )
}

export default Example3;