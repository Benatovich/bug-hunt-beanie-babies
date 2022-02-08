import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <BeaniesPage />
          </Route>
          <Route exact path="/beanies/:beanie">
            <BeanieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}