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
        <Route path="/user/:id" render={ (props) => <UserPage { ...props } />} />
        <Route exact path="/" render={ () => <Home /> } />
        <Route path="*" render={ () => <NotFound /> } />
      </Switch>
    </div>
  );
}

export default App;
