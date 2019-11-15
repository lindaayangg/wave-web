import React, {Component} from 'react';
import {StyledButton, StyledButtonsWrapper, StyledTextArea} from "./styles";
import strings from "../../res/strings";
import {Form} from "semantic-ui-react";

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

  handleSend = () => {
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
      </div>
    )
  }
}

export default Text;