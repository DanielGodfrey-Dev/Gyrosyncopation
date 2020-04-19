import React from 'react';
import styles from '../CSS/Game.css';
import Self from './Self.jsx';
import Friend from './Friend.jsx';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            selfNode: [0,0]

        }
    }

    render() {

        return (
            <div className={styles.gameArea}>
                <Self />
                <Friend />
            </div>
        )
    }

}

export default Game;