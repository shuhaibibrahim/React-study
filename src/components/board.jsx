import React, { Component } from 'react';
import Square from "./square.jsx";
class Board extends Component {
    
    state={
        history:null,
    }
    setValue=i=>{
        let board=[...this.props.currentBoard];
        board[i]={...this.props.currentBoard[i] };
        if(board[i].value===null)
        {
            if(this.state.history===null)
                board[i].value="X";
            else    
                board[i].value=this.state.history==="X"?"0":"X";
            this.setState({ history: board[i].value });
            this.props.onUpdate(board);
            this.props.changePlayer(this.props.player);
        }
        

    }

    renderSquare=i=>{
        return <div><Square onMove={this.setValue} id={i} value={this.props.currentBoard[i].value}></Square></div>
    }

    render() {
        return ( 
            <div className="m-4 ">
                <div className="board-row">
                    {this.renderSquare(0) } 
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)} 
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)} 
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
         );
    }
}
 
export default Board;