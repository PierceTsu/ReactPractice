/**
 * Created by DELL on 2017/2/15.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../Reducer';
import Route from '../Config/Router'

const store = createStore(
    reducer
);
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
    <Provider store={store}>
        {Route}
    </Provider>,
    rootEl
);

render();