import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import SalaryCalculator from './views/SalaryCalculator';
import Greeter from './views/Greeter';
import Products from './views/Products';

//import * as calculator from './calculator';
//const add = calculator.add;

//const { add } = calculator;
//console.log(calculator);

//import { add } from './calculator';

//importing default export
//import xyz from './calculator';
//console.log(xyz);

//ReactDOM.render(<App />, document.getElementById('root'));

import axios from 'axios';


import BugTracker from './views/BugTracker';

ReactDOM.render(
    <div>
        <BugTracker />
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
