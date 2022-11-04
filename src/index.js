import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from "react-redux";

const Store = createStore(CounterReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>

  <App />

</Provider>

);


