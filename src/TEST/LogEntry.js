import React, {Component} from 'react'

//todo A suprimer uniquement present pour les test du tuto
export default class LogEntry extends Component{
    render(){
        const className = `log entry ${this.isOpen() ? 'open' : 'closed'}`
        return (
            <li className={className} onClick={this.toggle}></li>
        )
    }
}