import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

const middleware = applyMiddleware(createLogger(), promise(), thunk);
const Store = createStore(reducers, middleware);
export default Store;