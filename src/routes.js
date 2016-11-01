import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App1 from './container/App';
import App from './App';
import FullFeed from './components/FullFeed';

export default
  <Route path="/" component={App} >
    <IndexRoute component={App1} />
    <Route path="/article/:id" component={FullFeed} />
  </Route>;
