import React from "react";
import ReactDOM from 'react-dom';
import {ApiData} from './utils/apicontext';
import {ApiStats} from './utils/datacontext';

import App from './app';
import './index.css';

const app = document.querySelector('#app');

ReactDOM.render(
<ApiData>
  <ApiStats>
    <App />
  </ApiStats>
</ApiData>
, 
app)