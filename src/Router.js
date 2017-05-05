import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import App from './App';
import ReviewRoute from './ReviewRoute';

let NoMatch = () => <h1>404</h1>

export default () =>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ReviewRoute} />
      <Route path="review" component={ReviewRoute} />
      <Route path="note" component={NoMatch} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
