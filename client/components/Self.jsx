import React from 'react';
import styles from '../CSS/Self.css';
import classNames from 'classNames';

const Self = ({ location, interaction }) => {
    
    const coordinates = {
        x: location[0],
        y: location[1]
    }

    const style = {
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`
    }
    console.log(location[0]);
    console.log(interaction);

    return (
        <div className={interaction ? styles.interface : styles.node} style={style}></div>
    )
}

export default Self;