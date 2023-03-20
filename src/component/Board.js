import React, {Component} from 'react';
import Square from "./Square";
import {lines} from "../const/constants";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isNext: true // true => 'X', false => '0'
        }
        this.count = 0;
        this.isWinner = null;
    }

    calculateWinner = () => {
        const squares = [...this.state.squares];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    fillSquare = (index) => {
        if (!this.state.squares[index] && !this.isWinner) {
            let temp = [...this.state.squares];
            temp[index] = this.state.isNext ? 'X' : '0';
            this.setState({squares: temp, isNext: !this.state.isNext});
            this.count++;
        }
    }
    renderSquare = index => {
        return (
            <Square value={this.state.squares[index]} fillSquare={this.fillSquare} index={index}/>
        )
    }

    render() {
        if (this.count > 4) {
            this.isWinner = this.calculateWinner();
        }
        let status;
        if (this.isWinner) {
            status = `Winner ${this.isWinner}`;
        } else if (this.count === 9) {
            status = `Draw`;
        } else {
            status = `Next player: ${this.state.isNext ? 'X' : '0'}`;
        }
        return (
            <div>
                <div className='status'>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;