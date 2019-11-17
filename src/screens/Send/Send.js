import React, {Component} from 'react';
import {StyledLeftGrid, StyledRightGrid, StyledSendIcon, StyledTitleText} from "./styles";
import strings from "../../res/strings";
import Tab from "../../components/Tab/Tab";
import {Grid} from "semantic-ui-react";
import {StyledComponentWrapper} from "../../res/styles";
import {StyledReceiveImage} from "../Receive/styles";

class Send extends Component {

  renderLeftGrid() {
    return (
      <Tab/>
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
        {/*<StyledSendImage src='https://beyondmart.com/web-development-rajkot.png'/>*/}
        {/*<StyledSendImage src='https://www.seekclipart.com/clipng/middle/311-3119939_send-us-a-note-clipart.png'/>*/}
        <StyledReceiveImage src='https://www.transparenttextures.com/patterns/asfalt-light.png'/>
      </>
    )
  }

  render() {
    return (
      <StyledComponentWrapper>
        <Grid columns={2} relaxed="very">
          <StyledLeftGrid width={9} verticalAlign="middle">
            {this.renderLeftGrid()}
          </StyledLeftGrid>
          <StyledRightGrid width={7} verticalAlign="middle">
            {this.renderRightGrid()}
          </StyledRightGrid>
        </Grid>
      </StyledComponentWrapper>
    );
  }
}

export default Send;
