import React, {Component} from 'react';
import DropzoneArea from "../../components/Dropzone/Dropzone";
import {
  StyledButton, StyledButtonsWrapper,
  StyledLeftGrid,
  StyledRightGrid,
  StyledSendIcon, StyledTab, StyledTabPane,
  StyledTextArea,
  StyledTitleText,
  StyledWrapper
} from "./styles";
import {Form, Tab} from "semantic-ui-react";
import strings from "../../res/strings";

class Send extends Component {

  renderButtons() {
    return (
      <StyledButtonsWrapper>
        <StyledButton>
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
            {this.renderButtons()}
          </StyledTabPane>
      },
      {
        menuItem: 'Images/Files', render: () =>
          <StyledTabPane>
            <DropzoneArea></DropzoneArea>
            {this.renderButtons()}
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
