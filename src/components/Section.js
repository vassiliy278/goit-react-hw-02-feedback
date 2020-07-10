import React, {Component} from 'react';
import style from '../style/App.module.css';
import PropTypes from 'prop-types';
import FeedbackOptions from '../components/FeedbackOptions';
import Statistics from '../components/Statistics'

export default class Section extends Component {
    static defaultProps = {
        title: 'Feedback Counter'
    }

    render() {
        const {title, state} = this.props
        return (
            <div className={style.wrapper}>
                <h1 className={style.title}>{title}</h1>

                <FeedbackOptions
                options={this.props}
                />

                <Statistics className={style.stats}
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
                total={state.total}
                positivePercentage={0}
                />

            </div>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string,
    state: PropTypes.object
}