import './App.css';
import React, {Component} from 'react';
import Start from "./component/Start";
import GameBoard from "./component/GameBoard";
import {AppContext} from "./component/context/contextCreator";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    changeUserName = (event) => {
        event.preventDefault();
        const name = event.target.nameInput.value;
        this.setState({...this.state, username: name});
    }

    render() {
        return (
            !this.state.username ? <Start changeName={this.changeUserName}/> :
                <AppContext.Provider value={
                    {name: this.state.username}
                }>
                    <GameBoard/>
                </AppContext.Provider>
        );
    }
}

export default App;
