import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

//front load the Event plugin for material-ui

import App from '../imports/ui/App.jsx';

Meteor.startup(()=>{
  injectTapEventPlugin();
  render(<App />, document.getElementById('render-target'))
})
