/**
 * Created by DELL on 2017/2/20.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {ADD, MINUS} from '../Action/index';
import {Button} from 'antd';
import '../css/calculate.css';

class Calculator extends Component {
    render() {

        const {value, onIncreaseClick, onDecreaseClick} = this.props;

        return (
            <div className="container">
                <h2 className="show_text">count: {value}</h2>
                <div className="btn">
                    <Button type="primary" onClick={onIncreaseClick}> + </Button>
                    {' '}
                    <Button type="primary" onClick={onDecreaseClick}> - </Button>
                </div>
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
        onDecreaseClick: () => dispatch({
            type: MINUS
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);