import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import configureStore from './store/index';
import history from './modules/history';

import App from './containers/App';

import 'semantic-ui-css/semantic.min.css';

import './icons';

const store = configureStore({}, history);

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
  document.getElementById('root'),
);
