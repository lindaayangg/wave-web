import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import PreviewList from "../PreviewList/PreviewList";
import {StyledDropzoneDiv, StyledGridRow, StyledUploadIcon} from "./styles";

class DropzoneArea extends React.Component {
  state = {
    fileObjects: [],
  };

  onDrop = (files) => {
    if (this.state.fileObjects.length + files.length > this.props.filesLimit) {
      //this.props.enqueueSnackbar('Only one file can be uploaded.', {autoHideDuration: 2000});
    } else {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.setState({
            fileObjects: this.state.fileObjects.concat({
              file: file,
              data: event.target.result,
            }),
          }, () => {
            if (this.props.onChange) {
              this.props.onChange(this.state.fileObjects.map(fileObject => fileObject.file));
            }
            //this.props.enqueueSnackbar('File ' + file.name + ' uploaded.', {autoHideDuration: 2000});
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  handleRemove = (fileIndex) => (event) => {
    event.stopPropagation();
    const {fileObjects} = this.state;
    const file = fileObjects.filter((fileObject, i) => {
      return i === fileIndex;
    })[0].file;
    fileObjects.splice(fileIndex, 1);
    this.setState(fileObjects, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.fileObjects.map(fileObject => fileObject.file));
      }
      //this.props.enqueueSnackbar('File ' + file.name + ' removed.', {autoHideDuration: 2000});
    });
  };

  handleDropRejected = (rejectedFiles) => {
    let message = '';
    rejectedFiles.forEach((rejectedFile) => {
      message = 'File ' + rejectedFile.name + ' was rejected. ';
      if (!this.props.acceptedFiles.includes(rejectedFile.type)) {
        message += 'File type not supported. ';
      }
      if (rejectedFile.size > this.props.maxFileSize) {
        message += 'File is too big. Size limit is ' + this.convertBytesToMbsOrKbs(this.props.maxFileSize) + '. ';
      }
    });
    //this.props.enqueueSnackbar(message, {autoHideDuration: 2000});
  };

  convertBytesToMbsOrKbs = (filesize) => {
    let size = '';
    if (filesize >= 1000000) {
      size = (filesize / 1000000) + ' megabytes';
    } else if (filesize >= 1000) {
      size = (filesize / 1000) + ' kilobytes';
    } else {
      size = filesize + ' bytes';
    }
    return size;
  };

  render() {
    return (
      <Dropzone
        accept={this.props.acceptedFiles.join(',')}
        onDrop={this.onDrop.bind(this)}
        onDropRejected={this.handleDropRejected.bind(this)}
        maxSize={this.props.maxFileSize}>
        {({getRootProps, getInputProps}) => (
          <section>
            <StyledDropzoneDiv
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {
                this.state.fileObjects.length === 0 ?
                  <StyledGridRow>
                      <div>
                        {this.props.message}
                      </div>
                      <StyledUploadIcon name="cloud upload" size="big"/>
                  </StyledGridRow>
                  :
                  <PreviewList
                    fileObjects={this.state.fileObjects}
                    handleRemove={this.handleRemove.bind(this)}
                  />
              }
            </StyledDropzoneDiv>
          </section>
        )}
      </Dropzone>
    );
  }
}

DropzoneArea.defaultProps = {
  acceptedFiles: ['image/*'],
  filesLimit: 1,
  maxFileSize: 5000000,
  message: 'Drag and drop image or click here',
  onChange: () => {},
};

DropzoneArea.propTypes = {
  classes: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  acceptedFiles: PropTypes.array,
  filesLimit: PropTypes.number,
  maxFileSize: PropTypes.number,
  message: PropTypes.string,
  onChange: PropTypes.func,
};

export default DropzoneArea;