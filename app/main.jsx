'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import '../public/style/index.scss';

import store from './store';
import Routes from './Routes';

render (
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('main')
)
