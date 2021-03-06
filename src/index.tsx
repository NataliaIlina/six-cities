import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'src/containers';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/styles.css';
import GlobalStyles from 'src/assets/styles/global';
import store from './store';

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );
};

init();
