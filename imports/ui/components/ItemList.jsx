import React, { Component, PropTypes } from 'react';

import { TrackedItems } from '../../api/TrackedItems.js';
import ItemLi from './ItemLi.jsx';
import { createContainer } from 'meteor/react-meteor-data';

import './ItemList.scss';

class ItemList extends Component {

  renderItems() {
    return this.props.trackedItems.map((item) => (
      <ItemLi key={item._id} item={item} />
    ));
  }

  render(){
    return (
      <div>
        <ul className="itemList">
          {this.renderItems()}
        </ul>
      </div>
    );
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
