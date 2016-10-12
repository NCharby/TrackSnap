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
      disableRecord: false
    };
  }

  uploadFile(evt){
    const files = evt.target.files;
    console.log(files)
    if(files.length > 0){
      this.setState({disableRecord: true})
    }
  }

  unloadFile(evt){
    this.setState({disableRecord: false})
  }

  requestCapture(evt){
    const cameraOptions = {
      width: 800,
      height: 600
    }

    MeteorCamera.getPicture(cameraOptions, (err, data)=>{
        TrackedItems.insert({
          createdAt: new Date(),
          image: data
        })
    })
  }

  render(){
    return(
      <div style={parentStyle}>
        <ImagePreview />

        <RaisedButton
          label="Record"
          labelPosition="before"
          containerElement="label"
          disabled={this.state.disableRecord}
          onClick={this.requestCapture.bind(this)}
          >
        </RaisedButton>
        <RaisedButton
          label="cancel"
          disabled={!this.state.disableRecord}
          onClick={this.unloadFile.bind(this)}>
        </RaisedButton>
      </div>
    )
  }
}
