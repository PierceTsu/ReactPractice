/**
 * Created by DELL on 2017/2/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import link_style from '../css/link.css';

export default class NavLink extends Component {
    render() {
        return (
            <Link {...this.props} className={link_style.active}/>
        );
    }
}