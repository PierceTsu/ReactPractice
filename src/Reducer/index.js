/**
 * Created by DELL on 2017/2/16.
 */
import {combineReducers} from 'redux';
import {ADD, MINUS} from '../Action/index';

const rootReducer = combineReducers({
    postReducer
});

const postReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case MINUS:
            return state - 1;
        default:
            return state;
    }
};

export default postReducer;