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

  render() {
    return (
      <StyledComponentWrapper>
        <Grid columns={2} relaxed="very">
          <StyledLeftGrid computer={10} tablet={16} mobile={16} verticalAlign="middle">
            {this.renderLeftGrid()}
          </StyledLeftGrid>
          <StyledRightGrid  computer={6} tablet={16} mobile={16} verticalAlign="middle">
            <StyledReceiveImage src='https://www.seekclipart.com/clipng/middle/311-3119939_send-us-a-note-clipart.png'/>
          </StyledRightGrid>
        </Grid>
      </StyledComponentWrapper>
    )
  }
}

export default Receive;