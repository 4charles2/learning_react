import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, {FAKE_HOF} from "./HallofFame"

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'
const VISUAL_PAUSE_MSECS = 750

class App extends Component {
    state = {
        cards: this.generateCards(),
        currentPair: [],
        guesses: 0,
        matchedCardIndices: []
    }
    //cards = this.generateCards()

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

    handleCardClick = (index) => {
        const { currentPair } = this.state
        console.log(index, ' index de la card clicked', this)

        if(currentPair.length === 2) {
            return
        }

        if (currentPair.length === 0) {
            this.setState({ currentPair: [index] })
            return
        }
        this.handleNewPairClosedBy(index)

    }

    render() {
        const {cards, guesses, matchedCardIndices} = this.state
        //Date().getSeconds() % 2 === 0
        const won = matchedCardIndices.length === cards.length
        return (
            <div className="memory">
                <GuessCount guesses={guesses}/>
                {cards.map((card, index) => (
                    <Card
                        card={card}
                        feedback={this.getFeedbackForCard(index)}
                        key={index}
                        index={index}
                        onClick={this.handleCardClick}
                    />
                ))}
                {<HallOfFame entries={FAKE_HOF} /> }
            </div>
        )
    }

    /**
     * Défnie si les cartes doivent être retourné ou pas.
     * Si il y a déjà une carte de retourne ou pas
     * Si Il y a matche ou pas
     * @param index
     * @returns {string}
     */
    getFeedbackForCard(index) {
        const {currentPair, matchedCardIndices } = this.state
        const indexMatched = matchedCardIndices.includes(index)

        if (currentPair.lenght < 2) {
            return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
        }

        if (currentPair.includes(index)) {
            return indexMatched ? 'justMatched' : "justMismatched"
        }

        return indexMatched ? 'visible' : 'hidden'
    }
    handleNewPairClosedBy(index) {
        const { cards, currentPair, guesses, matchedCardIndices } = this.state

        const newPair = [currentPair[0], index]
        const newGuesses = guesses + 1
        const matched = cards[newPair[0]] === cards[newPair[1]]

        this.setState({currentPair: newPair, guesses: newGuesses})

        if(matched)
            this.setState({matchedCardIndices: [...matchedCardIndices, ...newPair]
        })

        setTimeout(() => this.setState({currentPair: []}), VISUAL_PAUSE_MSECS)
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