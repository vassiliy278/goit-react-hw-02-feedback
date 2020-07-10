import React from 'react';
import style from '../style/App.module.css';
import PropTypes from 'prop-types';


const feedback = ({options}) => {
    return (
        <>
            <div className={style.buttons_block}>
                <button className={style.button} type="button" onClick={options.goodInc}>Good</button>
                <button className={style.button} type="button" onClick={options.neutralInc}>Neutral</button>
                <button className={style.button} type="button" onClick={options.badInc}>Bad</button>
            </div>
        </>
    )
}

feedback.propTypes = {
    options: PropTypes.object
}

export default feedback