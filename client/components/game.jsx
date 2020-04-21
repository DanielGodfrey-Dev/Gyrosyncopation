import React from 'react';
import styles from '../CSS/Game.css';
import Self from './Self.jsx';
import Friend from './Friend.jsx';
import GameOver from './GameOver.jsx';
import FriendName from './FriendName.jsx';
import GyroFail from './GyroFail.jsx';
import GameWin from './GameWin.jsx';
import JSONbrain from './JSONbrain.jsx';
import Cooperation from './Cooperation.jsx';

import axios from 'axios';

const loadStats = () => {
    
}

const getRandomLocation = () => {

    let min = 0;
    let max = 95;

    let x = Math.floor(Math.random() * (max - min) + min); 
    let y = Math.floor(Math.random() * (max - min) + min);

    return [x, y];
};

const getRandomStat = () => {
    return Math.ceil(Math.random() * 6);
}

const getRandomCheck = () => {
    return (Math.floor(Math.random() * 10000) % 3)
}

let dummyNode = {
    name: '',
    nameReveal: false,
    friendNodeProcessor: null,
    friendNodeRAM: null,
    friendNodeQuantum: null
}

let initialState = {
    keypadDirection: '',

    //your node
    selfNode: [0,0],
    selfNodeStats: {
        selfNodeProcessor: getRandomStat(),
        selfNodeRAM: getRandomStat(),
        selfNodeQuantum: getRandomStat()
    },
    
    //interactive node
    friendNodes: [getRandomLocation(), getRandomLocation(), getRandomLocation()],
    friendNodeStats: {
        name: '',
        friendNodeProcessor: null,
        friendNodeRAM: null,
        friendNodeQuantum: null
    },

    nameReveal: false,

    //is interaction possible? with which node?
    interaction: false,
    interfacingNode: dummyNode,
    nameReveal: false,
    cooperation: false,

    gameOver: false,
    gyroFail: false,
    gameWin: false,

    JSONbrain: false,
    JSONremaining: 2
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
        this.enquireName = this.enquireName.bind(this);
        this.gyrosyncopate = this.gyrosyncopate.bind(this);
        this.JSONscan = this.JSONscan.bind(this);
        this.cooperation = this.cooperation.bind(this);
    }

    componentDidMount() {
        //initialize keypress functionality
        document.onkeydown = this.onKeyDown;
        axios.get('/nodes')
        .then((nodes) => {
          console.log('data set: ', nodes.data);
          this.setState({friendNodeStats: nodes.data})
        })
        .catch((err) => {
          console.log('something went awry');
        })
    }


    componentDidUpdate() {
        //always check to see if selfNode has broken Geo Fence
        // console.log(this.state.selfNode, this.state.friendNodes);
        this.checkGeoFence()
        this.interfaceStart(this.state.friendNodes[2]);
        this.interfaceFinish(this.state.friendNodes[2]);
        // console.log(this.state.interfacingNode)
    }


    //_____Game Over on Geo Fence Break Logic or Gyrosyncopation Failure___
    //checks to see if selfNode breaks geofence boundary
    checkGeoFence() {
        let selfNode = this.state.selfNode;
        if (selfNode[0] >= 98 || selfNode[1] >= 96 || selfNode[0] <= -3 || selfNode[1] <= -3) {
            this.gameOver();
        }
    }

    gameOver() {
        this.setState({ selfNode: [3, 3] });
        this.setState({ gameOver: true })
        //________________reset game____________________________________
        setTimeout(() => {
            this.setState(initialState);
            this.setState({ friendNodes: [getRandomLocation(), getRandomLocation(), getRandomLocation()]})
            axios.get('/nodes')
            .then((nodes) => {
              console.log('data set: ', nodes.data);
              this.setState({friendNodeStats: nodes.data})
            })
            .catch((err) => {
              console.log('something went awry');
            })
            let selfNodeStats = {
                selfNodeProcessor: getRandomStat(),
                selfNodeRAM: getRandomStat(),
                selfNodeQuantum: getRandomStat()
            }
            this.setState({selfNodeStats: selfNodeStats})
        }, 3000);
        //______________________________________________________________
    }

    //initiates Game Over based on friendNode interaction
    gyroFail() {
        this.setState({ selfNode: [3, 3] });
        this.setState({ gyroFail: true })
        //________________reset game____________________________________
        setTimeout(() => {
        this.setState(initialState);
        this.setState({ friendNodes: [getRandomLocation(), getRandomLocation(), getRandomLocation()]})
        axios.get('/nodes')
        .then((nodes) => {
          console.log('data set: ', nodes.data);
          this.setState({friendNodeStats: nodes.data})
        })
        .catch((err) => {
          console.log('something went awry');
        })
        let selfNodeStats = {
            selfNodeProcessor: getRandomStat(),
            selfNodeRAM: getRandomStat(),
            selfNodeQuantum: getRandomStat()
        }
        this.setState({selfNodeStats: selfNodeStats})
        }, 10000);
        //______________________________________________________________
    }
    //__________________________________________________________________

    //initiates Game Win after successful Gyrosyncopation
    gameWin() {
        this.setState({ selfNode: [3, 3] });
        this.setState({ gameWin: true })
        //________________reset game____________________________________
        setTimeout(() => {
        this.setState(initialState);
        this.setState({ friendNodes: [getRandomLocation(), getRandomLocation(), getRandomLocation()]})
        axios.get('/nodes')
        .then((nodes) => {
          console.log('data set: ', nodes.data);
          this.setState({friendNodeStats: nodes.data})
        })
        .catch((err) => {
          console.log('something went awry');
        })
        let selfNodeStats = {
            selfNodeProcessor: getRandomStat(),
            selfNodeRAM: getRandomStat(),
            selfNodeQuantum: getRandomStat()
        }
        this.setState({selfNodeStats: selfNodeStats})
        }, 15000);
        //______________________________________________________________
    }


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
    interfaceStart(friendNode) {
        let selfNode = this.state.selfNode;

        if (selfNode[0] >= (friendNode[0] - 3) && selfNode[0] <= (friendNode[0] + 3) && selfNode[1] >= (friendNode[1] - 3) && selfNode[1] <= (friendNode[1] + 3) && this.state.interaction === false) {
            console.log('node immersive interfacing initiated...');
            this.setState({ interaction: true, interfacingNode: this.state.friendNodeStats })
        } 
    }
        
    interfaceFinish(friendNode) {
        let selfNode = this.state.selfNode;

        if (((friendNode[0] - 3) > selfNode[0] || (friendNode[0] + 3) < selfNode[0] || (friendNode[1] - 3) > selfNode[1] || (friendNode[1] + 3) < selfNode[1]) && this.state.interaction === true) {
            console.log('node immersive interfacing finished...');
            // this.setState({ selfNode: [friendNode[0] - 5, friendNode[1] - 5] });
            this.setState({ interaction: false, interfacingNode: dummyNode })
        } 
    }
    //________________...interfacing can initialize or complete_________

    enquireName() {
        console.log('friendNode has a name: ' + this.state.interfacingNode.name);
        this.setState({ nameReveal: true });
        setTimeout(() => {
            axios.get('/nodes')
            .then((nodes) => {
              console.log('data set: ', nodes.data);
              this.setState({friendNodeStats: nodes.data})
            })
            .catch((err) => {
              console.log('something went awry');
            })
            this.setState({nameReveal: false});
            this.setState({ friendNodes: [getRandomLocation(), getRandomLocation(), getRandomLocation()]})
        }, 4000);
    }

    gyrosyncopate() {
        let life = true;
        const selfNodeProcessor = this.state.selfNodeStats.selfNodeProcessor;
        const selfNodeRAM = this.state.selfNodeStats.selfNodeRAM;
        const selfNodeQuantum = this.state.selfNodeStats.selfNodeQuantum;

        const friendNodeProcessor = this.state.friendNodeStats.friendNodeProcessor;
        const friendNodeRAM = this.state.friendNodeStats.friendNodeRAM;
        const friendNodeQuantum = this.state.friendNodeStats.friendNodeQuantum;

        if (Math.abs(selfNodeProcessor - friendNodeProcessor) >= 3) {
            life = false;
        }

        if (Math.abs(selfNodeRAM - friendNodeRAM) >= 3) {
            life = false;
        }

        if (Math.abs(selfNodeQuantum - friendNodeQuantum) >= 3) {
            life = false;
        }

        if (!life) {
            this.gyroFail();
        } else if (life) {
            this.gameWin();
        }
    }

    JSONscan() {
        let minus = this.state.JSONremaining - 1;
        this.setState({ JSONremaining: minus, JSONbrain: true });
        console.log(this.state.interfacingNode);
        setTimeout(() => {
            axios.get('/nodes')
            .then((nodes) => {
              console.log('data set: ', nodes.data);
              this.setState({friendNodeStats: nodes.data})
            })
            .catch((err) => {
              console.log('something went awry');
            })
            this.setState({JSONbrain: false});
            this.setState({ friendNodes: [getRandomLocation(), getRandomLocation(), getRandomLocation()]})
        }, 5000);
    }

    cooperation() {
        console.log('friendNode has features: ' + this.state.interfacingNode);
        this.setState({ cooperation: true });
        setTimeout(() => {
            axios.get('/nodes')
            .then((nodes) => {
              console.log('data set: ', nodes.data);
              this.setState({friendNodeStats: nodes.data})
            })
            .catch((err) => {
              console.log('something went awry');
            })
            this.setState({cooperation: false});
            this.setState({ friendNodes: [getRandomLocation(), getRandomLocation(), getRandomLocation()]})
        }, 5000);
    }

    render() {

        return (
            <div>

            <div className={styles.stats}>
                <h4>selfNode Processor: {this.state.selfNodeStats.selfNodeProcessor}</h4>
                <h4>selfNode Memory: {this.state.selfNodeStats.selfNodeRAM}</h4>
                <h4>selfNode Quantum Matrix: {this.state.selfNodeStats.selfNodeQuantum}</h4>
                <img src='node.png'></img>
            </div>
            
            <div id="box" className={styles.gameArea}>
        
                <Self id='self' 
                location={this.state.selfNode} 
                interaction={this.state.interaction} 
                enquireName={this.enquireName}
                gyrosyncopate={this.gyrosyncopate}
                JSONscan={this.JSONscan}
                JSONremaining={this.state.JSONremaining}
                cooperation={this.cooperation}
                />
                {this.state.friendNodes.map((friendNode, i) =>
                <Friend key={i} location={friendNode} interaction={this.state.interaction}/>)
                }
                
                {this.state.nameReveal ? <FriendName nameReveal={this.state.nameReveal} friendName={this.state.interfacingNode.name}/> : <GameOver gameOver={this.state.gameOver}/>}
                {this.state.gyroFail ? <GyroFail gyroFail={this.state.gyroFail} character={this.state.interfacingNode.name}/> : null}
                {this.state.gameWin ? <GameWin gameWin={this.state.gameWin} character={this.state.interfacingNode.name}/> : null}
                {this.state.JSONbrain ? <JSONbrain JSONbrain={this.state.JSONbrain} friendName={this.state.interfacingNode}/> : null}
                {this.state.cooperation ? <Cooperation cooperation={this.state.cooperation} friendName={this.state.interfacingNode}/> : null}


                </div>
            </div>
          
        )
    }

}
export default Game;