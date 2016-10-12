import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export default class TopBar extends Component {
  getMenuItems(){
    return [
      {_id: 0, text: "Sign Out"}
    ]
  }

  renderMenuItems(){
    return this.getMenuItems().map((item)=>{
      return <MenuItem primaryText={item.text} key={item._id}/>
    })
  }

  render(){
    return (
        <AppBar
          title="TrackSnap"
          iconElementLeft= {
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }>

              {this.renderMenuItems()}
            </IconMenu>
          }
        />

    )
  }
}
