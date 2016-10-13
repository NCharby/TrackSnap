import React, { Component, PropTypes } from 'react';
import Tesseract from 'tesseract.js'

export default class ImagePreview extends Component {
  componentDidMount(){
    
  }
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
