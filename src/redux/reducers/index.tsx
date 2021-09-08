import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import product from './product';

const createRootReducer = (history: History) => combineReducers({
    product,
    router: connectRouter(history),
});

export default createRootReducer;
