import React, {Component} from 'react';
import {StyledButton, StyledButtonsWrapper, StyledSemanticToastContainer} from "../../res/styles";
import {StyledTextArea} from "./styles";
import strings from "../../res/strings";
import {Form} from "semantic-ui-react";
import {toast} from 'react-semantic-toasts';
import {animations, icons} from "../../res/constants";
import axios from 'axios';
import {Chirp} from "chirpsdk";

class SendText extends Component {
  state = {
    textBox: '',
  };

  handleTextChange = (event) => {
    this.setState({
      textBox: event.target.value,
    })
  };

  handleClear = () => {
    this.setState({
      textBox: '',
    })
  };

  handleRandomString = (length) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };

  handleSend = () => {
    const body = {
      code: 'wv' + this.handleRandomString(8),
      text: this.state.textBox,
    };

    if (this.state.textBox !== '') {
      axios
        .post('http://138.197.151.168:3000/waves', body)
        .then(response => {
          if (response.statusText === 'OK') {
            Chirp({key: '62B7Ab44b74C3E671a9cddd2a'})
              .then(sdk => {
                sdk.start()
                  .then(() => {
                    const rc = sdk.send(body.code);
                    if (rc !== 0) {
                      setTimeout(() => {
                        toast({
                          type: strings.snackbar.error,
                          icon: icons.EXCLAMATION_CIRCLE,
                          title: strings.snackbar.text.chirpSendErrorTitle,
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
                          title: strings.snackbar.text.successTitle,
                          description: strings.snackbar.text.successDescription,
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
                    title: strings.snackbar.text.chirpRequestErrorTitle,
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
                title: strings.snackbar.text.errorTitle,
                description: strings.snackbar.text.errorDescription1 + response.statusText + strings.snackbar.text.errorDescription2,
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
    } else {
      setTimeout(() => {
        toast({
          type: strings.snackbar.warning,
          icon: icons.EXCLAMATION_TRIANGLE,
          title: strings.snackbar.text.emptyTitle,
          description: strings.snackbar.text.emptyDescription,
          animation: animations.BOUNCE,
          time: 3000,
        });
      }, 300);
    }
  };

  renderTextButtons() {
    return (
      <StyledButtonsWrapper>
        <StyledButton
          circular
          onClick={this.handleClear}
        >
          {strings.buttons.clear}
        </StyledButton>
        <StyledButton
          circular
          onClick={this.handleSend}
        >
          {strings.buttons.send}
        </StyledButton>
      </StyledButtonsWrapper>
    )
  }

  renderTextField() {
    return (
      <Form>
        <StyledTextArea
          rows={10}
          value={this.state.textBox}
          onChange={this.handleTextChange}
          placeholder={strings.sendScreen.textBoxPlaceholder}
        >
        </StyledTextArea>
      </Form>
    )
  }

  render() {
    return (
      <div>
        {this.renderTextField()}
        {this.renderTextButtons()}
        <StyledSemanticToastContainer/>
      </div>
    )
  }
}

export default SendText;