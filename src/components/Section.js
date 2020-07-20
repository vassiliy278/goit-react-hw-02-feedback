import React from 'react';
import PropTypes from 'prop-types';

export default function Section ({title, children}) {
    return (
        <section>
        <h1>{title}</h1>
        <div>{children}</div>
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
}