import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Technologies from './Technologies';
import Details from './Details';
import NotFound from './not-found';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Technologies} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:technologyId' component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
