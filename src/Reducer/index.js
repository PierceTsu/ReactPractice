/**
 * Created by DELL on 2017/2/16.
 */
import {ADD, MINUS} from '../Action/index';

const postReducer = (state = {count:0}, action) => {
    const count = state.count;
    switch (action.type) {
        case ADD:
            return {count: count+1};
        case MINUS:
            return {count: count-1};
        default:
            return state;
    }
};

export default postReducer;