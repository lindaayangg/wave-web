import React, {Component} from 'react';
import {StyledButton, StyledButtonsWrapper, StyledSemanticToastContainer} from "../../res/styles";
import {StyledTextArea} from "./styles";
import strings from "../../res/strings";
import {Form} from "semantic-ui-react";
import {toast} from 'react-semantic-toasts';
import {animations, icons} from "../../res/constants";

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
    fetch('http://138.197.151.168:3000/waves/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: 'wv' + this.handleRandomString(8),
        text: this.state.textBox,
      })
    })
      .then(response => {
        if (response.ok) {
          setTimeout(() => {
            toast({
              type: strings.snackbar.success,
              icon: icons.CHECK_CIRCLE,
              title: strings.snackbar.text.successTitle,
              description: strings.snackbar.text.successDescription,
              animation: animations.FADE,
              time: 1500,
            });
          }, 300);
          return response.json();
        } else {
          setTimeout(() => {
            toast({
              type: strings.snackbar.error,
              icon: icons.EXCLAMATION_CIRCLE,
              title: strings.snackbar.text.errorTitle,
              description: strings.snackbar.text.errorDescription1 + response.status + strings.snackbar.text.errorDescription2,
              animation: animations.BOUNCE,
              time: 1500,
            });
          }, 300);
          throw new Error('Error ' + response.status);
        }
      })
      .catch(error => {
        setTimeout(() => {
          toast({
            type: strings.snackbar.error,
            icon: icons.EXCLAMATION_CIRCLE,
            title: strings.snackbar.text.requestErrorTitle,
            description: strings.snackbar.text.requestErrorDescription + error,
            animation: animations.BOUNCE,
            time: 1500,
          });
        }, 300);
        console.log('Requested Failed. Error: ' + error);
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
        <StyledSemanticToastContainer />
      </div>
    )
  }
}

export default Text;