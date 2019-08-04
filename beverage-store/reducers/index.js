import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import ProductReducer from './ProductReducer';

var reducers = combineReducers({
    UserReducer,
    ProductReducer
});

export default reducers;