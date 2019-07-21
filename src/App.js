import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from "./HallofFame"

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
    cards = this.generateCards()

    generateCards() {
        const result = []
        const size = SIDE * SIDE
        const candidates = shuffle(SYMBOLS)
        while (result.length < size) {
            const card = candidates.pop()
            result.push(card, card)
        }

        return shuffle(result)
    }

    handleCardClick(card) {
        console.log(card, 'clicked', this)
    }

    render() {
       // const won = new Date().getSeconds() % 2 === 0
        return (
            <div className="memory">
                <GuessCount />
                {this.cards.map((card, index) => (
                    <Card
                        card={card}
                        feedback="visible"
                        key={index}
                        onClick={card => this.handleCardClick(card)}
                    />
                ))}
                {<HallOfFame entries={FAKE_HOF} /> }
            </div>
        )
    }
}

export default App









{/*
import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import GuessCount from "./GuessCount";
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
//Pour le commentaire
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