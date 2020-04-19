import React from 'react';
import styles from '../CSS/Friend.css';

const Friend = ({ location }) => {
    
    const style = {
        left: `${location[0]}%`,
        top: `${location[1]}%`
    }

    return (
        <div className={styles.node} style={style}></div>
    )
}

export default Friend;