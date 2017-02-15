/**
 * Created by DELL on 2017/2/15.
 */
import React, {Component} from 'react';
import styles from '../css/Greeter.css'

export default class Greeter extends Component {
    render() {
        return (
            <h1 className={styles.container_out}>Hello {this.props.name}!</h1>
        );
    }
}