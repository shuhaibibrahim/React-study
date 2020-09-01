import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Test2 from './test2';
import Item from './item';
import Game from '../components/game';
import Sort from './sort';

class Test extends Component {
    render() { 
        return (
        <Router>
            <nav className="navbar navbar-header navbar-light bg-secondary text-white">
                <ul className="navbar-nav mr-auto">
                    <Link to="/"><li className="nav-link text-white">first page</li></Link>
                    <Link to="/second"><li className="nav-link text-white">second page</li></Link>
                    <Link to="/game"><li className="nav-link text-white">Game</li></Link>
                </ul>
                <Sort></Sort>
            </nav>
            <Route path="/" exact render={()=><h1>first page</h1>} />
            <Route path="/second" exact component = {Test2} />
            <Route path="/second/:id" component = {Item} />
            <Route path="/game" component = {Game} />
        </Router>
         );
    }
}
 
export default Test;