/**
 * Created by DELL on 2017/2/20.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {ADD, MINUS} from '../Action/index';

class Calculator extends Component {
    render() {

        const {value, onIncreaseClick, onDecreaseClick} = this.props;

        return (
            <div>
                <p>{value}</p>
                <button onClick={onIncreaseClick}> + </button>
                {' '}
                <button onClick={onDecreaseClick}> - </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {value: state.count}
};

const mapDispatchToProps = dispatch => {
    return {
        onIncreaseClick: () => dispatch({
            type: ADD
        }),
        onDecreaseClick:()=> dispatch({
            type: MINUS
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);