import React from 'react';
import PropTypes from 'prop-types';

const notify = ({message}) => {

    return(
        <>
            <h2>{message}</h2>
        </>
    )
}
notify.propTypes = {
    message: PropTypes.string
}
export default  notify