import React from 'react';
import style from '../style/App.module.css';
import PropTypes from 'prop-types';


export default function feedback ({onLeaveFeedback, options}) {
    const names = Object.keys(options);
    names.forEach(e => <button name={e} onClick={onLeaveFeedback}>{e}</button>
    )
    return (
        <>
            {Object.keys(options)
            .map(e => (<button type="button" name={e} key={e} onClick={onLeaveFeedback}>{e}</button>)
            )}
        </>

    )
}

feedback.propTypes = {
    options: PropTypes.shape({
        Good: PropTypes.number,
        Bad: PropTypes.number,
        Neutral: PropTypes.number
    }),
    onLeaveFeedback: PropTypes.func
}

