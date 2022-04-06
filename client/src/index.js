import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FilterProvider } from "./context/FilterContext"
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
