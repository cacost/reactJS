import React from 'react';
import ReactDOM from 'react-dom';
import './_assets/cea-tachyons.css';
import './_assets/common.scss';
import Orders from './Orders';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Orders />, document.getElementById('root'));

serviceWorker.unregister();
