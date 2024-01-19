import React, { Component } from 'react'
import {DropContainer, UploadMessage} from './styles'
import Dropzone from 'react-dropzone'

export default class index extends Component {
  renderDragMessage =(isDragActive,isDragReject) =>{
    if(!isDragActive)
    {
      return <UploadMessage >Arraste o documento aqui...</UploadMessage>
    } if(isDragReject){
      return <UploadMessage type='error'>Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type='sucess'>Solte o documento aqui</UploadMessage>
  }
  render() {
    const {onUpload} = this.props;
    return (
      <Dropzone onDropAccepted={onUpload}>
        {({getRootProps, getInputProps, isDragActive,isDragReject})=>(
        <DropContainer {...getRootProps()} isDragActive = {isDragActive} isDragReject={isDragReject}>

          <input {...getInputProps()} />
          {this.renderDragMessage(isDragActive,isDragReject)}
        </DropContainer>
        )}
      </Dropzone>
    )
  }
}
