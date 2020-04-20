import React from 'react';
import styles from '../CSS/Game.css';
import Self from './Self.jsx';
import Friend from './Friend.jsx';

const getRandomLocation = () => {

    let min = 0;
    let max = 95;

    let x = Math.floor(Math.random() * (max - min) + min); 
    let y = Math.floor(Math.random() * (max - min) + min);

    return [x, y];
};

let initialState = {
    keypadDirection: '',
    selfNode: [0,0],
    friendNodes: [getRandomLocation()],
    interfacingNode: null,
    interaction: false
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.checkGeoFence = this.checkGeoFence.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.interfaceStart = this.interfaceStart.bind(this);
        this.interfaceFinish = this.interfaceFinish.bind(this);
    }

    componentDidMount() {
        //initialize keypress functionality
        document.onkeydown = this.onKeyDown;
    }


    componentDidUpdate() {
        //always check to see if selfNode has broken Geo Fence
        // console.log(this.state.selfNode, this.state.friendNodes);
        this.checkGeoFence();
        this.interfaceStart();
        this.interfaceFinish();
    }


    //________________Game Over on Geo Fence Break Logic_______________
    //checks to see if selfNode breaks geofence boundary
    checkGeoFence() {
        let selfNode = this.state.selfNode;
        if (selfNode[0] >= 98 || selfNode[1] >= 96 || selfNode[0] <= -3 || selfNode[1] <= -3) {
            this.gameOver();
        }
    }

    gameOver() {
        alert('Node Destruction via Geofence. Game Over.');
        //________________reset game____________________________________
        this.setState(initialState);
        this.setState({ friendNodes: [getRandomLocation()]})
        //______________________________________________________________
    }
    //__________________________________________________________________


    //_________________Enable control of selfNode through keyboard______
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
    //__________________________________________________________________


    //________________selfNode can interact with other nodes!___________
    interfaceStart() {
        let selfNode = this.state.selfNode;
        let friendNode = this.state.friendNodes[0];

        if (selfNode[0] >= (friendNode[0] - 3) && selfNode[0] <= (friendNode[0] + 3) && selfNode[1] >= (friendNode[1] - 3) && selfNode[1] <= (friendNode[1] + 3) && this.state.interaction === false) {
            console.log('node immersive interfacing initiated...');
            this.setState({ interaction: true, interfacingNode: friendNode })
        } 
    }
        
    interfaceFinish() {
        let selfNode = this.state.selfNode;
        let friendNode = this.state.friendNodes[0];

        if (((friendNode[0] - 3) > selfNode[0] || (friendNode[0] + 3) < selfNode[0] || (friendNode[1] - 3) > selfNode[1] || (friendNode[1] + 3) < selfNode[1]) && this.state.interaction === true) {
            console.log('node immersive interfacing finished...');
            // this.setState({ selfNode: [friendNode[0] - 5, friendNode[1] - 5] });
            this.setState({ interaction: false, interfacingNode: null })
        } 
    }


    render() {

        return (
            <div className={styles.gameArea}>
                <Self id='self' location={this.state.selfNode} interaction={this.state.interaction}/>
                <Friend location={this.state.friendNodes[0]} interaction={this.state.interaction}/>
            </div>
        )
    }

}

export default Game;