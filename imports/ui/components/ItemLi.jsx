import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

export default class ListLi extends Component {
  render() {
    return (

      <li>
        <img src={this.props.item.image} />
        <TextField
          key={this.props.item._id}
          name={this.props.item.createdAt.toString()}
          defaultValue={this.props.item.createdAt.toString()} />
      </li>
    );
  }
}

ListLi.propTypes = {
  item: PropTypes.object.isRequired,
};
