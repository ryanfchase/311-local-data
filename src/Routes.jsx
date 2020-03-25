import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Contact from './components/contact/Contact';
import About from './components/about/About';
import Body from './components/main/body/Body';

export default function Routes() {
  return (
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/comparison" component={Body} />
      <Route path="/" component={Body} />
    </Switch>
  );
}
