import React from 'react';
import styles from '../CSS/Friend.css';
const faker = require('faker');

const Friend = ({ location, interaction }) => {

    
    const coordinates = {
        x: location[0],
        y: location[1]
    }

    const style = {
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`
    }

    const getGreeting = () => {
        const greetings = ['hello', '調子はどうだい？', 'have you seen the mastermind?', 'who are you?', faker.hacker.phrase()];
        return greetings[Math.floor(Math.random() * 5)]
    }

    let greeting = getGreeting();

    return (
        <div className={interaction ? styles.interface : styles.node} style={style}>
            {interaction ? <h3 style={{marginLeft: '90px', marginTop: '70px', color: 'pink'}}>{greeting}</h3> : null}
        </div>
    )
}

export default Friend;