import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { TrackedItems } from '../api/TrackedItems.js';

import TopBar from './layouts/TopBar';
import RecordImage from './layouts/RecordImage';
import ItemList from './components/ItemList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends Component {
  constructor(){
    super();


  }

  render(){
    return (
      <div>
        <MuiThemeProvider>
          <TopBar/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RecordImage />
        </MuiThemeProvider>
        <ItemList/>
      </div>

    )
  }
}
