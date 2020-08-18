import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      
      <Switch>
      <div className="App">
      <Route>
        <Login/>
      </Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
