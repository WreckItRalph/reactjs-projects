import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';


var store = applyMiddleware(thunk)(createStore)(reducers);

export default store;