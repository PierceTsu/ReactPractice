/**
 * Created by DELL on 2017/2/17.
 */
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from '../modules/App';
import Home from '../modules/Home';
import Repos from '../modules/Repos';
import Repo from '../modules/Repo';
import About from '../modules/About';
import Calculator from '../modules/Calculater';

const RouterConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo}/>
            </Route>
            <Route path="/about" component={About}/>
            <Route path="/calc" component={Calculator}/>
        </Route>
    </Router>
);

export default RouterConfig;