import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import GuessCount from "./GuestCount";
import Card from "./Card";



class App extends Component {
    handleCardClick(card){
        console.log(card, 'clicked')
    }
    render() {
        const won = new Date().getSeconds() % 2 === 0
        return (
            <div className="memory">
                <GuessCount guesses={0}/>
                <Card card="🎉" feedback="justMatched"  onClick={this.handleCardClick}/>
                <Card card="😁" feedback="hidden" onClick={this.handleCardClick}/>
                <Card card="❤"  feedback="justMismatched"  onClick={this.handleCardClick}/>
                <Card card="🎩" feedback="visible"  onClick={this.handleCardClick}/>
                <Card card="🐱" feedback="hidden"  onClick={this.handleCardClick}/>
                <Card card="👀" feedback="justMatched"  onClick={this.handleCardClick}/>
                {won && <p>GAGNÉ ! </p>}
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