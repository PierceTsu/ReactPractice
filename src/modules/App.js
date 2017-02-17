/**
 * Created by DELL on 2017/2/17.
 */
import React, {Component} from 'react';
import NavLink from './NavLink';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}