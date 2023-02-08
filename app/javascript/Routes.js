import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import ByeWorld from './bundles/HelloWorld/components/ByeWorld';

export default (
    <Router>
      <Switch>
        <Route path="/hello_world" exact component={HelloWorld} />
        <Route path="/bye_world" exact component={ByeWorld} />
      </Switch>
    </Router>
  );