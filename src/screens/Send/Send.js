import React, {Component} from 'react';
import DropzoneArea from "../../components/Dropzone/Dropzone";
import {
  StyledButton,
  StyledButtonsWrapper,
  StyledLeftGrid,
  StyledRightGrid,
  StyledSendIcon,
  StyledSendImage,
  StyledTab,
  StyledTabPane,
  StyledTextArea,
  StyledTitleText,
  StyledWrapper
} from "./styles";
import {Form} from "semantic-ui-react";
import strings from "../../res/strings";

class Send extends Component {
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

  renderTextButtons() {
    return (
      <StyledButtonsWrapper>
        <StyledButton
          onClick={this.handleClear}
        >
          {strings.buttons.clear}
        </StyledButton>
        <StyledButton>
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

  renderTab() {
    const panes = [
      {
        menuItem: 'Text', render: () =>
          <StyledTabPane>
            {this.renderTextField()}
            {this.renderTextButtons()}
          </StyledTabPane>
      },
      {
        menuItem: 'Images/Files', render: () =>
          <StyledTabPane>
            <DropzoneArea></DropzoneArea>
          </StyledTabPane>
      },
    ];
    return (
      <StyledTab
        menu={{fluid: true, vertical: true}}
        menuPosition='left'
        panes={panes}
      />
    )
  }

  renderLeftGrid() {
    return (
      <>
        {this.renderTab()}
      </>
    )
  }

  renderRightGrid() {
    return (
      <>
        <StyledSendIcon name="send" size="huge"/>
        <StyledTitleText>
          {strings.sendScreen.title}
        </StyledTitleText>
        {/*<StyledSendImage src='https://webdevinsights.com/wp-content/uploads/2019/08/hosting-800x445.jpg'/>*/}
        <StyledSendImage src='https://beyondmart.com/web-development-rajkot.png'/>
      </>
    )
  }

  render() {
    return (
      <StyledWrapper columns={2} relaxed="very">
        <StyledLeftGrid width={9} verticalAlign="middle">
          {this.renderLeftGrid()}
        </StyledLeftGrid>
        <StyledRightGrid width={7} verticalAlign="middle">
          {this.renderRightGrid()}
        </StyledRightGrid>
      </StyledWrapper>
    );
  }
}

export default Send;
