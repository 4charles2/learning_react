import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import GuessCount from "./GuestCount";
import Card from "./Card";



class App extends Component {
    render() {
        return (
            <div className="memory">
                <GuessCount guesses={0}/>
                <Card card="🎉" feedback="justMatched"  onClick={this.handleClick}/>
                <Card card="😁" feedback="hidden" onClick={this.handleClick}/>
                <Card card="❤"  feedback="justMismatched"  onClick={this.handleClick}/>
                <Card card="🎩" feedback="visible"  onClick={this.handleClick}/>
                <Card card="🐱" feedback="hidden"  onClick={this.handleClick}/>
                <Card card="👀" feedback="justMatched"  onClick={this.handleClick}/>
            </div>
        );
    }
}

export default App;

// code par default de l'application react'
{
    /*<div className="App">*/
    /*  <header className="App-header">*/
    /*    <img src={logo} className="App-logo" alt="logo" />*/
// {/*    <p>*/}
// {/*      Edit <code>src/App.js</code> and save to reload.*/}
// {/*    </p>*/}
// {/*    <a*/}
// {/*        className="App-link"*/}
// {/*        href="https://reactjs.org"*/}
// {/*        target="_blank"*/}
// {/*        rel="noopener noreferrer"*/}
// {/*    >*/}
// {/*      Learn React*/}
// {/*    </a>*/}
// {/*  </header>*/}
    /*</div>*/
}