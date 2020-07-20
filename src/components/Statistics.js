import React from 'react';
import PropTypes from 'prop-types';

export default function statistics ({Good, Neutral, Bad, total, positivePercentage }) {

    return (
        <>
            <p>{Good}</p>
            <p>{Neutral}</p>
            <p>{Bad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positivePercentage}%</p>
        </>
    )
}

statistics.propTypes = {
    Good: PropTypes.number,
    Bad: PropTypes.number,
    Neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}