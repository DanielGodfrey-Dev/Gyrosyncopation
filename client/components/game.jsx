import React from 'react';
import styles from '../CSS/Game.css';
import Self from './Self.jsx';
import Friend from './Friend.jsx';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selfNode: [10,10],
            friendNodes: [
                [90,30]
            ]
        }
    }

    render() {

        return (
            <div className={styles.gameArea}>
                <Self location={this.state.selfNode}/>
                <Friend location={this.state.friendNodes[0]}/>
            </div>
        )
    }

}

export default Game;