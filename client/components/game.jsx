import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            selfNode: null

        }
    }

    render() {

        return (
            <div>the matrix is expanding...selfNode preparing.</div>
        )
    }

}

export default Game;