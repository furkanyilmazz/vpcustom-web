import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import Index from './container/Index/Index';



ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
