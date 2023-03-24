import React from 'react'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact = {true} component = {Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
