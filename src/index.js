import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import reducer from './redux/University/universityReducer';
import LocalStorage from './util/storage';

document.addEventListener('DOMContentLoaded', () => {
  const init = LocalStorage.load();

  // Поключение thunk для асинхроного действия
  const middlewares = [thunk];
  const enhancer = applyMiddleware(...middlewares);
  const store = createStore(reducer, init, composeWithDevTools(enhancer));

  window.onbeforeunload = function() {
    LocalStorage.save(store);
  };
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
});
