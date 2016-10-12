import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ImagePreview from '../components/ImagePreview';

import { TrackedItems } from '../../api/TrackedItems.js';

const parentStyle = {
  padding: 10
}

const hideStyle = {
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: '100%',
  opacity: 0,
}

export default class RecordImage extends Component {
  constructor(){
    super();
    this.state = {
      disableRecord: false,
      currentImage: null
    };
  }

  onActionClick(evt){
    if(this.state.currentImage !== null){
      this.saveImage();
    } else {
      this.requestCapture();
    }
  }

  clearState() {
    this.setState({currentImage: null, disableRecord: false})
  }

  requestCapture(){
    const cameraOptions = {
      width: 800,
      height: 600
    }
    MeteorCamera.getPicture(cameraOptions, (err, data)=>{
        this.setState({currentImage: data, disableRecord: true});
    })
  }

  saveImage() {
    TrackedItems.insert({
      createdAt: new Date(),
      image: this.state.currentImage
    })
    this.clearState()
  }

  render(){

    return(
      <div style={parentStyle}>

        <ImagePreview image={this.state.currentImage} />

        <RaisedButton
          label={(this.state.disableRecord)? 'Save': 'Record'}
          labelPosition="before"
          containerElement="label"
          onClick={this.onActionClick.bind(this)}
          />

        <RaisedButton
          label="cancel"
          disabled={!this.state.disableRecord}
          onClick={this.clearState.bind(this)}>
        </RaisedButton>
      </div>
    )
  }
}
