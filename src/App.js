import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './Movies';
import Details from './Details/Details';
import NotFound from './not-found';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Movies} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:technologyId' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
