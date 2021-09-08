import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const middlewares = [createPromise(), thunk];

if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger();

    middlewares.push(loggerMiddleware);
}

const composeEnhancers = compose;

const middleware = applyMiddleware(...middlewares, routerMiddleware(history));

export default createStore(
    rootReducer(history),
    composeEnhancers(middleware),
);
