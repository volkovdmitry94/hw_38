import React, {Component} from 'react';
import DataManager from "../repository/dataManager";
import End from "./End";
import {AppContext} from "./context/contextCreator";

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckData: DataManager.newGame(),
            computerScores: 0,
            playerScores: 0,
            page: 'Board'
        }
        this.countRounds = 1;
    }

    componentDidMount = () => {
        if (this.state.deckData[0].power > this.state.deckData[1].power) {
            let newScore = this.state.computerScores;
            this.setState({...this.state, computerScores: ++newScore});
        } else if (this.state.deckData[0].power < this.state.deckData[1].power) {
            let newScore = this.state.playerScores;
            this.setState({...this.state, playerScores: ++newScore});
        }
    }

    nextCards = () => {
        const newDeck = this.state.deckData.slice();
        newDeck.shift();
        newDeck.shift();
        this.countRounds++;

        let newComputerScores = this.state.computerScores;
        let newPlayerScores = this.state.playerScores;
        if (newDeck[0].power > newDeck[1].power) {
            newComputerScores++;
        } else if (newDeck[0].power < newDeck[1].power) {
            newPlayerScores++;
        }

        this.setState({
            ...this.state, deckData: newDeck,
            computerScores: newComputerScores, playerScores: newPlayerScores
        });
    }

    render() {
        let cardNameFirst = this.state.deckData[0].cardName;
        let cardNameLast = this.state.deckData[1].cardName;
        return ((this.state.page === 'Board') ?
                <div className="table">
                    <div className="flexStart">
                        <div>COMPUTER</div>
                    </div>
                    <img className="card" src={require(`../imagesCards/${cardNameFirst}.png`)} alt={cardNameFirst}/>
                    <div className="redText">{this.state.computerScores}-{this.state.playerScores}</div>
                    <img className="card" src={require(`../imagesCards/${cardNameLast}.png`)} alt={cardNameLast}/>
                    <div className="flexRow">
                        <button
                            onClick={(this.countRounds < 26) ? this.nextCards :
                                () => this.setState({...this.state, page: 'End'})}
                            className="btn">next
                        </button>
                        <AppContext.Consumer>
                            {value => <div>{value.name}</div>}
                        </AppContext.Consumer>
                    </div>
                </div> :
                <End computerSc={this.state.computerScores} playerSc={this.state.playerScores}/>
        );
    }
}

export default GameBoard;