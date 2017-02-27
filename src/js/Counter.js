/**
 * Created by DELL on 2017/2/16.
 */
import React, {Component, PropTypes} from 'react';

export default class Counter extends Component {

    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    };

    incrementIfOdd = ()=>{
        console.log(this.props.value);
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    };

    incrementAsync = ()=>{
        setTimeout(this.props.onIncrement, 500)
    };

    render() {

        const {value, onIncrement, onDecrement} = this.props;

        return (
            <span>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}> +</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={this.incrementAsync}>Increment async</button>
            </span>
        )
    }
}