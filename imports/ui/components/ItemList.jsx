import React, { Component, PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { TrackedItems } from '../../api/TrackedItems.js';
import { createContainer } from 'meteor/react-meteor-data';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class ItemList extends Component {
  renderItems() {
    this.props.trackedItems.map((item)=>{
      console.log(item)
      return <li key={item._id} item={item}>{item.createdAt}</li>
    })
  }

  render(){
    console.log(this.renderItems())
    return(
      <ul>
        {this.renderItems()}
      </ul>
    )
  }
}

ItemList.propTypes = {
  trackedItems: PropTypes.array.isRequired
}

export default createContainer( ()=>{
  return {
    trackedItems: TrackedItems.find({}).fetch()
  }
}, ItemList)
