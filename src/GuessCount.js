import React from 'react';
import PropTypes from "prop-types";

import './GuestCount.css';

const GuessCount = ({guesses}) => <div className="guesses" >{guesses}</div>

GuessCount.defaultProps = {
    guesses: 0
}

GuessCount.propTypes = {
    guesses: PropTypes.number.isRequired

};

export default GuessCount