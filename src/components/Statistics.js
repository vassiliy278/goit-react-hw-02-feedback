import React from 'react';
import Notification from './Notification'
import PropTypes from 'prop-types';

const statistics = ({good, neutral, bad, total, positivePercentage }) => {
    //positive percentage counter
    if (total > 0) {
        positivePercentage = Math.floor((good/total)*100)
    } else (positivePercentage = 0)
 
    if (total) {
        return (
            <>
            <h1>Statistics</h1>
            <h2>Good: {good}</h2>
            <h2>Neutral: {neutral}</h2>
            <h2>Bad: {bad}</h2>
            <h2>Total: {total}</h2>
            <h2>Positive percentage: {`${positivePercentage}%`}</h2>
            </>
        )   
    } 
    return(
        <>
        <h1>Statistics</h1>
        <Notification message={"No feedback given"}/>
        </>
    )
    
}
statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}
export default statistics