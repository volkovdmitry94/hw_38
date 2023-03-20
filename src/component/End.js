import React, {Component} from 'react';
import GameBoard from "./GameBoard";
import DataManager from "../repository/dataManager";

class End extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'End',
            finalStatsComputer: DataManager.getPlayerFromLocal().statsComputer,
            finalStatsPlayer: DataManager.getPlayerFromLocal().statsPlayer
        }
    }

    componentDidMount = () => {
        if (this.props.computerSc > this.props.playerSc) {
            let newScore = this.state.finalStatsComputer;
            this.setState({...this.state, finalStatsComputer: ++newScore});
            DataManager.savePlayerToLocal(false);
        } else if (this.props.computerSc <= this.props.playerSc) {
            let newScore = this.state.finalStatsPlayer;
            this.setState({...this.state, finalStatsPlayer: ++newScore});
            DataManager.savePlayerToLocal(true);
        }
    }

    render() {
        return ((this.state.page === 'End') ?
                <div>
                    <div className="table">
                        <div className="redText">
                            {(this.props.computerSc <= this.props.playerSc) ? 'Win' : 'Lose'}
                        </div>
                        <div className="redText smaller">Current round:</div>
                        <div className="redText smaller">
                            Computer: {this.props.computerSc} - Player: {this.props.playerSc}</div>
                        <div className="redText smaller">Round statistics:</div>
                        <div className="redText smaller">
                            Computer: {this.state.finalStatsComputer} - Player: {this.state.finalStatsPlayer}</div>
                        <button
                            onClick={() => this.setState({...this.state, page: 'Previous'})}
                            className="btn">again?
                        </button>
                    </div>
                </div> :
                <GameBoard/>
        );
    }
}

export default End;