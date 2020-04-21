import React from 'react';
import styles from '../CSS/Self.css';
import Interface from './Interface.jsx';

const Self = ({ location, interaction }) => {
    
    const coordinates = {
        x: location[0],
        y: location[1]
    }

    const style = {
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`
    }

    return (
        <div className={interaction ? styles.interface : styles.node} style={style}>
            {interaction ? <Interface /> : null}
        </div>
    )
}

export default Self;