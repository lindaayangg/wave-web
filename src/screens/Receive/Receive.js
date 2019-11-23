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
import wave_receive from '../../res/images/wave_receive.png';

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
            <StyledReceiveImage src={wave_receive}/>
          </StyledRightGrid>
        </Grid>
      </StyledComponentWrapper>
    )
  }
}

export default Receive;