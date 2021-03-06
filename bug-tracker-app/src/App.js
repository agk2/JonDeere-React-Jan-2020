import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SalaryCalculator from './views/SalaryCalculator';
import Greeter from './views/Greeter';
import Products from './views/Products';
import BugTracker from './views/BugTracker/BugTracker';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/salaryCalculator">salary Calculator</Link>
            </li>
            <li>
              <Link to="/greeter?xyz=100">Greeter</Link>
            </li>
            <li>
              <Link to="/bugtracker">Bug Tracker</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/salaryCalculator">
            <SalaryCalculator />
          </Route>
          <Route path="/greeter" component={Greeter}>
          </Route>
          <Route path="/bugtracker">
            <BugTracker />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}


