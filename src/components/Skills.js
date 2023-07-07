import React, { useEffect, useState } from 'react'

export default function Skills({ skills }) {
    
    const [LoggedIn, setLoggendIn] = useState(false);
    

    useEffect(() => {
        setTimeout(() => {
            setLoggendIn(true)
        },1000)
    },[]);

    return (
        <div>
            <h2>List of Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>{skill.name}</li>
                ))}
            </ul>
            {LoggedIn ? (<button> Start working</button>): (<button>Loggin</button>)}
        </div>
    )
}
