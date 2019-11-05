import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Technologies from './Technologies';
import Details from './Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Technologies} />
        <Route exact path='/:details' component={Details} />
      </div>
    </Router>
  );
}
export default App;
