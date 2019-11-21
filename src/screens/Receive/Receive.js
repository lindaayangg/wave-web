import React, {Component} from "react";
import {StyledComponentWrapper} from "../../res/styles";
import {
  StyledLeftGrid,
  StyledReceiveIcon, StyledReceiveImage,
  StyledReceiveWaveWrapper,
  StyledRightGrid,
  StyledTitleText,
  StyledTitleWrapper
} from "./styles";
import {Grid} from "semantic-ui-react";
import strings from "../../res/strings";
import ReceiveWave from "../../components/ReceiveWave/ReceiveWave";

class Receive extends Component {

  renderTitle() {
    return (
      <StyledTitleWrapper>
        <StyledReceiveIcon name="microphone" size="huge"/>
        <StyledTitleText>
          {strings.receiveScreen.title}
        </StyledTitleText>
      </StyledTitleWrapper>
    )
  }

  renderLeftGrid() {
    return (
      <>
        {this.renderTitle()}
        <StyledReceiveWaveWrapper>
          <ReceiveWave/>
        </StyledReceiveWaveWrapper>
      </>
    )
  }

  renderRightGrid() {
    return (
      <StyledReceiveImage src='https://www.seekclipart.com/clipng/middle/311-3119939_send-us-a-note-clipart.png'/>
    )
  }

  render() {
    return (
      <StyledComponentWrapper>
        <Grid columns={2} relaxed="very">
          <StyledLeftGrid width={10} verticalAlign="middle">
            {this.renderLeftGrid()}
          </StyledLeftGrid>
          <StyledRightGrid width={6} verticalAlign="middle">
            {this.renderRightGrid()}
          </StyledRightGrid>
        </Grid>
      </StyledComponentWrapper>
    )
  }
}

export default Receive;