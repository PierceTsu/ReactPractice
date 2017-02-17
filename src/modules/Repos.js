/**
 * Created by DELL on 2017/2/17.
 */
import React, {Component} from 'react';
import NavLink from './NavLink';

export default class Repos extends Component {

    static contextTypes = {
        router: React.PropTypes.object
    };

    handleSubmit(event){
        event.preventDefault;
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `repos/${userName}/${repo}`;
        console.log(path);
        // this.context.router.push(path);
    }

    render() {
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li>
                        <NavLink to="repos/reacjs/react-router">React Router</NavLink>
                    </li>
                    <li>
                        <NavLink to="repos/facebook/react">React</NavLink>
                    </li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/>
                            {' '}
                            <input type="text" placeholder="repo"/>
                            {' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}