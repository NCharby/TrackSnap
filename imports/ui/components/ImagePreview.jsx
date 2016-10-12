import React, { Component, PropTypes } from 'react';


export default class ImagePreview extends Component {

  render(){
    return (
        <div>
          <img src={this.props.image} />
        </div>
    )
  }
}


ImagePreview.propTypes = {
  image: PropTypes.string
}
