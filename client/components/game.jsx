import React from 'react';
import styles from '../CSS/Game.css';
import Self from './Self.jsx';
import Friend from './Friend.jsx';

const getRandomLocation = () => {

    let min = 0;
    let max = 95;

    let x = Math.random() * (max - min) + min; 
    let y = Math.random() * (max - min) + min;

    return [x, y];
};

let initialState = {
    keypadDirection: '',

    selfNode: [0,0],
    friendNodes: [getRandomLocation()]
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.checkGeoFence = this.checkGeoFence.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    componentDidMount() {
        document.onkeydown = this.onKeyDown;
    }

    componentDidUpdate() {
        // console.log(this.state.selfNode);
        this.checkGeoFence();
    }

    checkGeoFence() {
        let selfNode = this.state.selfNode;
        if (selfNode[0] >= 98 || selfNode[1] >= 96 || selfNode[0] <= -3 || selfNode[1] <= -3) {
            this.gameOver();
        }
    }

    gameOver() {
        alert('Node Destruction Through the Geofence. Game Over.');
        this.setState(initialState);
        this.setState({ friendNodes: [getRandomLocation()]})
    }

    onKeyDown(e) {
        e = e || window.event;
        switch (e.keyCode) {
            case 38:
              this.setState({
                  keypadDirection: 'UP',
                  selfNode: [this.state.selfNode[0], this.state.selfNode[1] - 3]
                });
              break;
            case 40:
                this.setState({
                    keypadDirection: 'DOWN',
                    selfNode: [this.state.selfNode[0], this.state.selfNode[1] + 3]
                  });
              break;
            case 37:
                this.setState({
                    keypadDirection: 'LEFT',
                    selfNode: [this.state.selfNode[0] - 3, this.state.selfNode[1]]
                  });
              break;
            case 39:
                this.setState({
                    keypadDirection: 'RIGHT',
                    selfNode: [this.state.selfNode[0] + 3, this.state.selfNode[1]]
                  });
              break;
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