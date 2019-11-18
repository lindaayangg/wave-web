import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import PreviewList from "../PreviewList/PreviewList";
import {StyledDropzoneDiv, StyledGridRow, StyledMessage, StyledUploadIcon} from "./styles";
import strings from "../../res/strings";
import {toast} from 'react-semantic-toasts';
import {StyledSemanticToastContainer} from "../../res/styles";
import {animations, icons} from "../../res/constants";
import {StyledButton, StyledButtonsWrapper} from "../../res/styles";
import {Chirp} from "chirpsdk";

class DropzoneArea extends React.Component {
  state = {
    fileObjects: [],
  };

  handleOnDrop = (files) => {
    if (this.state.fileObjects.length + files.length > this.props.filesLimit) {
      setTimeout(() => {
        toast({
          type: strings.snackbar.error,
          icon: icons.EXCLAMATION_CIRCLE,
          title: strings.snackbar.dropzone.uploadErrorTitle,
          description: strings.snackbar.dropzone.uploadErrorDescription,
          animation: animations.BOUNCE,
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
                icon: icons.CHECK_CIRCLE,
                title: strings.snackbar.dropzone.uploadSuccessTitle,
                description: strings.snackbar.dropzone.uploadSuccessDescription1 + file.name + strings.snackbar.dropzone.uploadSuccessDescription2,
                animation: animations.FADE,
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
          icon: icons.CHECK_CIRCLE,
          title: strings.snackbar.dropzone.removeSuccessTitle,
          description: strings.snackbar.dropzone.removeSuccessDescription1 + file.name + strings.snackbar.dropzone.removeSuccessDescription2,
          animation: animations.FADE,
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
        icon: icons.EXCLAMATION_CIRCLE,
        title: strings.snackbar.dropzone.uploadErrorTitle,
        description: message,
        animation: animations.BOUNCE,
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

  handleRandomString = (length) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };

  handleSend = (url, file) => {
    const formData = new FormData();
    formData.append('files[]', file);
    formData.set('code', 'wv' + this.handleRandomString(8));

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    axios
      .post(url, formData, options)
      .then(response => {
        if (response.statusText === 'OK') {
          Chirp({key: '62B7Ab44b74C3E671a9cddd2a'})
            .then(sdk => {
              sdk.start()
                .then(() => {
                  const rc = sdk.send(formData.get('code'));
                  if (rc !== 0) {
                    setTimeout(() => {
                      toast({
                        type: strings.snackbar.error,
                        icon: icons.EXCLAMATION_CIRCLE,
                        title: strings.snackbar.chirp.chirpSendErrorTitle,
                        description: strings.snackbar.chirp.chirpSendErrorDescription1 + sdk.errorToString(rc) + strings.snackbar.chirp.chirpSendErrorDescription2,
                        animation: animations.BOUNCE,
                        time: 3000,
                      });
                    }, 300);
                    console.log('Chirp send request failed. ' + sdk.errorToString(rc));
                  } else {
                    setTimeout(() => {
                      toast({
                        type: strings.snackbar.success,
                        icon: icons.CHECK_CIRCLE,
                        title: strings.snackbar.dropzone.successTitle,
                        description: strings.snackbar.dropzone.successDescription,
                        animation: animations.FADE,
                        time: 3000,
                      });
                    }, 300);
                  }
                })
                .catch(error => {
                  setTimeout(() => {
                    toast({
                      type: strings.snackbar.error,
                      icon: icons.EXCLAMATION_CIRCLE,
                      title: strings.snackbar.chirp.chirpStartErrorTitle,
                      description: strings.snackbar.chirp.chirpStartErrorDescription1 + error + strings.snackbar.chirp.chirpStartErrorDescription2,
                      animation: animations.BOUNCE,
                      time: 3000,
                    });
                  }, 300);
                  console.log('Unable to start chirp. ' + error);
                })
            })
            .catch(error => {
              setTimeout(() => {
                toast({
                  type: strings.snackbar.error,
                  icon: icons.EXCLAMATION_CIRCLE,
                  title: strings.snackbar.chirp.chirpRequestErrorTitle,
                  description: strings.snackbar.chirp.chirpRequestErrorDescription1 + error + strings.snackbar.chirp.chirpRequestErrorDescription2,
                  animation: animations.BOUNCE,
                  time: 3000,
                });
              }, 300);
              console.log('Chirp request failed. ' + error);
            });
          return response;
        } else {
          setTimeout(() => {
            toast({
              type: strings.snackbar.error,
              icon: icons.EXCLAMATION_CIRCLE,
              title: strings.snackbar.dropzone.errorTitle,
              description: strings.snackbar.dropzone.errorDescription1 + response.statusText + strings.snackbar.dropzone.errorDescription2,
              animation: animations.BOUNCE,
              time: 3000,
            });
          }, 300);
          throw new Error('Error ' + response.statusText);
        }
      })
      .catch(error => {
        setTimeout(() => {
          toast({
            type: strings.snackbar.error,
            icon: icons.EXCLAMATION_CIRCLE,
            title: strings.snackbar.requestErrorTitle,
            description: strings.snackbar.requestErrorDescription + error,
            animation: animations.BOUNCE,
            time: 3000,
          });
        }, 300);
        console.log('Requested Failed. ' + error);
      });
  };

  renderDropzoneButtons() {
    return (
      <StyledButtonsWrapper>
        <StyledButton
          onClick={() =>
            this.state.fileObjects.length !== 0
              ? this.handleSend('http://138.197.151.168:3000/waves', this.state.fileObjects[0].file)
              : setTimeout(() => {
                toast({
                  type: strings.snackbar.warning,
                  icon: icons.EXCLAMATION_TRIANGLE,
                  title: strings.snackbar.dropzone.emptyTitle,
                  description: strings.snackbar.dropzone.emptyDescription,
                  animation: animations.BOUNCE,
                  time: 3000,
                });
              }, 300)
          }
        >
          {strings.buttons.send}
        </StyledButton>
      </StyledButtonsWrapper>
    )
  }

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
        {this.renderDropzoneButtons()}
        <StyledSemanticToastContainer/>
      </div>
    );
  }
}

DropzoneArea.defaultProps = {
  acceptedFiles: ['image/*'],
  filesLimit: 1,
  maxFileSize: 5000000,
};

DropzoneArea.propTypes = {
  acceptedFiles: PropTypes.array,
  filesLimit: PropTypes.number,
  maxFileSize: PropTypes.number,
  message: PropTypes.string,
  onChange: PropTypes.func,
};

export default DropzoneArea;