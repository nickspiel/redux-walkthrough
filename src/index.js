import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import walkthroughReducers from './reducers';

const logger = store => next => action => {
  console.log('dispatching', action);
  console.log('current state', store.getState());

  return next(action);
};


const store = createStore(walkthroughReducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
