import React from "react";
import ReactDOM from 'react-dom';

import App from './app';

const app = document.querySelector('#app');
const ApiContext = React.createContext(null);
const DataContext = React.createContext(null);

ReactDOM.render(<App />, app)
