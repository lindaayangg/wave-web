import React, {Component} from 'react';
import {StyledButton, StyledButtonsWrapper, StyledSemanticToastContainer} from "../../res/styles";
import {StyledTextArea} from "./styles";
import strings from "../../res/strings";
import {Form} from "semantic-ui-react";
import {toast} from 'react-semantic-toasts';
import {animations, icons} from "../../res/constants";
import axios from 'axios';

class Text extends Component {
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

    axios
      .post('http://138.197.151.168:3000/waves', body)
      .then(response => {
        if (response.statusText === 'OK') {
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
  };

  renderTextButtons() {
    return (
      <StyledButtonsWrapper>
        <StyledButton
          onClick={this.handleClear}
        >
          {strings.buttons.clear}
        </StyledButton>
        <StyledButton
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

export default Text;