import React, {useState,useEffect} from "react";

const Example2 = () => {
    const [skills, setSkills] = useState([]);

    useEffect(()=>{
        fetch('/data2.json')
        .then(response => response.json())
        .then(data => setSkills(data.Skills))
    }, []);
    
    return(
        <div>
            {skills.map((skill, index) => (
                <ul key={index}>{skill.Area}
                    {skill.SkillSet.map((skillset, index) => {
                        return <li key={index}>{skillset.Name}</li>
                    })}
                </ul>
            ))}
        </div>
    )
}

export default Example2;