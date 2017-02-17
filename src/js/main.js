/**
 * Created by DELL on 2017/2/15.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Router, Route, hashHistory} from 'react-router';
import reducer from '../Reducer';
import Counter from './Counter';
import {ADD, MINUS} from '../Action/index';
import App from '../modules/App';
import Repos from '../modules/Repos';
import About from '../modules/About';

// const store = createStore(
//     reducer
// );
const rootEl = document.getElementById('root');

// const render = ()=>ReactDOM.render(
//     <Counter
//         value={store.getState()}
//         onIncrement={() => store.dispatch({type: ADD})}
//         onDecrement={() => store.dispatch({type: MINUS})}
//     />,
//     rootEl
// );

const render = () => ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    rootEl
);

render();
// store.subscribe(render);
