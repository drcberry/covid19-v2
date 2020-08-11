import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

import App from './app';
import {ApiData} from './utils/apicontext';
import {ApiStats} from './utils/datacontext';

const app = document.querySelector('#app');
//const ApiContext = React.createContext(null);
//const DataContext = React.createContext(null);

ReactDOM.render(
<ApiData>
  <ApiStats>
    <App />
  </ApiStats>
</ApiData>
, app)
