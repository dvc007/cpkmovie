import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/reducer/rootReducer';
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './redux_toolkit/userSlice';
import spinnerSlice from './redux_toolkit/spinnerSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store_toolkit = configureStore({
  reducer: {
    userSlice,
    spinnerSlice
  }
})
root.render(
  <Provider store={store_toolkit}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
