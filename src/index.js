import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import './index.css';
import App from './App';

ReactDOM.render(
  // <Provider/> makes the Redux store available
  // to any nested components that have been
  // wrapped in the connect() function
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
