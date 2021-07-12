import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import UserPage from './pages/User';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/search-github-users/user/:id" render={ (props) => <UserPage { ...props } />} />
        <Route exact path="/search-github-users/" render={ () => <Home /> } />
        <Route path="/search-github-users/*" render={ () => <NotFound /> } />
      </Switch>
    </div>
  );
}

export default App;
