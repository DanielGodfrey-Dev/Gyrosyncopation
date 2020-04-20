import React from 'react';
import styles from '../CSS/Game.css';
import Self from './Self.jsx';
import Friend from './Friend.jsx';

const getRandomLocation = () => {

    let min = 0;
    let max = 97;

    let x = Math.random() * (max - min) + min; 
    let y = Math.random() * (max - min) + min;

    return [x, y];
};

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keypadDirection: '',

            selfNode: [0,0],
            friendNodes: [getRandomLocation()]
        }
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        document.onkeydown = this.onKeyDown;
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