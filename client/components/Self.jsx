import React from 'react';
import styles from '../CSS/Self.css';

const Self = ({ location }) => {
    
    const coordinates = {
        x: location[0],
        y: location[1]
    }

    const style = {
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`
    }

    return (
        <div className={styles.node} style={style}></div>
    )
}

export default Self;