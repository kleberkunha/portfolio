import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Studies from './pages/Studies';

export default () => {

  return (
    <Switch>
      <Route exact path="/" component="/Home">
        <Home/>
      </Route>
      <Route exact path="/projects" basename='/portfolio/projects'>
        <Projects/>
      </Route>
      <Route exact path="/studies" basename='/portfolio/studies'>
        <Studies/>
      </Route>
    </Switch>
  );
}