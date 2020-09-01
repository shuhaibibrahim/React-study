import React, { Component } from 'react';
import Board from './board';

class Game extends Component {
    state = { 
        move: [[
            {id:0 , value: null},
            {id:1 , value: null},
            {id:2 , value: null},
            {id:3 , value: null},
            {id:4 , value: null},
            {id:5 , value: null},
            {id:6 , value: null},
            {id:7 , value: null},
            {id:8 , value: null},
        ]],
        index:0,
        currentBoard: [
            {id:0 , value: null},
            {id:1 , value: null},
            {id:2 , value: null},
            {id:3 , value: null},
            {id:4 , value: null},
            {id:5 , value: null},
            {id:6 , value: null},
            {id:7 , value: null},
            {id:8 , value: null},
        ],
        player: 1,
     }

    setUpdate=(board)=>{
        let move=this.state.move;
        move.push(board);
        let index=this.state.index+1;

        

        this.setState({ index  });
        this.setState({ currentBoard : board  });
        this.setState({ move  });
        console.log(this.state.move);
    }

    moveToId=(id)=>{
        let move=this.state.move.filter((m)=>{return this.state.move.indexOf(m)<=id});
        this.setState({ move  });
        this.setState({index:id});
        this.setState({currentBoard:move[id]})
        this.nextPlayer(this.state.player);
    }
    nextPlayer=(p)=>{
        const player= (p===1)?2:1;
        this.setState({ player });
    }


    renderButton()
    {
        const { move }=this.state;
        const button=move.map(m=><button className='display-block m-3' onClick={()=>this.moveToId(move.indexOf(m))} key={move.indexOf(m)} id={move.indexOf(m)}>Move to move#{move.indexOf(m)}</button>)
        return button;
    }

    render() { 
        console.log(this.props);
        return (
            <React.Fragment>
                <div >
                    <h3>Player {this.state.player}</h3>
                    <Board  onUpdate={this.setUpdate} player={this.state.player} changePlayer={this.nextPlayer} currentBoard={this.state.currentBoard}></Board>
                </div>
                <div>
                {this.renderButton()}
                </div>
            </React.Fragment> 
            
    
         );
    }
    componentDidMount(){
        const board=[...this.state.currentBoard];
        if(board[0].value===null)
            console.log("Player won");
    }
}
 
export default Game;