import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
    Font awesome icons
 */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

/*
    Bootstrap CSS , JS
 */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
