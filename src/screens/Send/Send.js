import React, {Component} from 'react';
import DropzoneArea from "../../components/Dropzone/Dropzone";
import {StyledButton, StyledDiv, StyledTextArea} from "./styles";
import {Form} from "semantic-ui-react";
import strings from "../../res/strings";

class Send extends Component {

  renderButtons() {
    return (
      <StyledButton>
        Send
      </StyledButton>
    )
  }

  renderTextField() {
    return (
      <Form>
        <StyledTextArea
          rows={6}
          placeholder={strings.sendScreen.textBoxPlaceholder}
        >
        </StyledTextArea>
      </Form>
    )
  }

  render() {
    return (
      <>
        <StyledDiv>
          {this.renderTextField()}
          <DropzoneArea></DropzoneArea>
          {this.renderButtons()}
        </StyledDiv>
      </>
    );
  }
}

export default Send;
