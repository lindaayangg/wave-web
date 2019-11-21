import React, {Component} from 'react';
import {
  StyledLeftGrid,
  StyledRightGrid,
  StyledSendIcon,
  StyledSendImage,
  StyledTabWrapper,
  StyledTitleText,
  StyledTitleWrapper
} from "./styles";
import strings from "../../res/strings";
import Tab from "../../components/Tab/Tab";
import {StyledComponentWrapper} from "../../res/styles";
import {Grid} from "semantic-ui-react";

class Send extends Component {

  renderTitle() {
    return (
      <StyledTitleWrapper>
        <StyledSendIcon name="send" size="huge"/>
        <StyledTitleText>
          {strings.sendScreen.title}
        </StyledTitleText>
      </StyledTitleWrapper>
    )
  }

  renderLeftGrid() {
    return (
      <>
        {this.renderTitle()}
        <StyledTabWrapper>
          <Tab/>
        </StyledTabWrapper>
      </>
    )
  }

  render() {
    return (
      <StyledComponentWrapper>
        <Grid columns={2}>
          <StyledLeftGrid width={10} verticalAlign="middle">
            {this.renderLeftGrid()}
          </StyledLeftGrid>
          <StyledRightGrid width={6} verticalAlign='middle'>
            <StyledSendImage src='https://www.seekclipart.com/clipng/middle/311-3119939_send-us-a-note-clipart.png'/>
          </StyledRightGrid>
        </Grid>
      </StyledComponentWrapper>
    );
  }
}

export default Send;
