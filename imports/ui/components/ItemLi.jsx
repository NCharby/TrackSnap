import React, { Component, PropTypes } from 'react';

export default class ListLi extends Component {
  render() {
    return (
      <li>{this.props.item.createdAt.toString()}</li>
    );
  }
}

ListLi.propTypes = {
  item: PropTypes.object.isRequired,
};
