import {
  createStore,
  applyMiddleware
} from 'redux';

const logger = store => next => action => {
  console.log('Before reducer', store.getState());
  next(action);
  console.log('After reducer', store.getState());
};

function reducer(state = {}, action) {
  switch(action.type) {
    case 'YES':
      return 'yes';
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({
  type: 'YES'
});

// npm i -D @babel-node 
//-- then run babel node w/:
// npx babel-node src/index.js
