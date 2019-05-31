import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducers from './reducers';

export default createStore(
  reducers,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
