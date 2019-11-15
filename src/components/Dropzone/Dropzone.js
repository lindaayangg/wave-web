import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import PreviewList from "../PreviewList/PreviewList";
import {
  StyledDropzoneDiv,
  StyledGridRow,
  StyledMessage,
  StyledUploadIcon
} from "./styles";
import strings from "../../res/strings";
import {toast} from 'react-semantic-toasts';
import {StyledSemanticToastContainer} from "../../res/styles";

class DropzoneArea extends React.Component {
  state = {
    fileObjects: [],
  };

  handleOnDrop = (files) => {
    if (this.state.fileObjects.length + files.length > this.props.filesLimit) {
      setTimeout(() => {
        toast({
          type: strings.snackbar.error,
          icon: 'exclamation circle',
          title: 'Upload Error',
          description: 'Only one file can be uploaded.',
          animation: 'bounce',
          time: 1500,
        });
      }, 300);
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
            setTimeout(() => {
              toast({
                type: strings.snackbar.success,
                icon: 'check circle',
                title: 'Upload Success',
                description: 'File ' + file.name + ' uploaded successfully.',
                animation: 'fade',
                time: 1500,
              });
            }, 200);
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
      setTimeout(() => {
        toast({
          type: strings.snackbar.success,
          icon: 'check circle',
          title: 'Remove Success',
          description: 'File ' + file.name + ' removed successfully.',
          animation: 'fade',
          time: 1000,
        });
      }, 200);
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
    setTimeout(() => {
      toast({
        type: strings.snackbar.error,
        icon: 'exclamation circle',
        title: 'Upload Error',
        description: message,
        animation: 'bounce',
        time: 1500,
      });
    }, 300);
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
      <div>
      <Dropzone
        accept={this.props.acceptedFiles.join(',')}
        onDrop={this.handleOnDrop.bind(this)}
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
                      <StyledMessage>
                        {strings.dropzone.message}
                      </StyledMessage>
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
        <StyledSemanticToastContainer />
      </div>
    );
  }
}

DropzoneArea.defaultProps = {
  acceptedFiles: ['image/*'],
  filesLimit: 1,
  maxFileSize: 5000000,
  onChange: () => {},
};

DropzoneArea.propTypes = {
  classes: PropTypes.object.isRequired,
  acceptedFiles: PropTypes.array,
  filesLimit: PropTypes.number,
  maxFileSize: PropTypes.number,
  message: PropTypes.string,
  onChange: PropTypes.func,
};

export default DropzoneArea;