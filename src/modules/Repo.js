/**
 * Created by DELL on 2017/2/17.
 */
import React, {Component} from 'react';

export default class Repo extends Component {
    render() {
        const { userName, repoName} = this.props.params;
        return (
            <div>
                <h2>{userName} / {repoName}</h2>
            </div>
        );
    }
}