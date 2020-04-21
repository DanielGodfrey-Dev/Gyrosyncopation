import React from 'react';
import styles from '../CSS/Self.css';
import Interface from './Interface.jsx';

const Self = ({ location, interaction, enquireName, gyrosyncopate, JSONscan, JSONremaining, cooperation }) => {

    const coordinates = {
        x: location[0],
        y: location[1]
    }

    const style = {
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`
    }

    const getGreeting = () => {
        const greetings = ['hello', 'hi', 'hello my name is selfNode', 'I am lonely', 'I am selfNode'];
        return greetings[Math.floor(Math.random() * 5)]
    }

    let greeting = getGreeting();

    return (

        <div className={interaction ? styles.interface : styles.node} style={style}>
            <img src='http://localhost:3099/selfNode.png'></img>
            {interaction ? <div><Interface enquireName={enquireName} gyrosyncopate={gyrosyncopate} JSONscan={JSONscan} JSONremaining={JSONremaining} cooperation={cooperation}/>
            <h3 style={{color: 'white'}}>{greeting}</h3></div> : null}
        </div>
    )
}

export default Self;