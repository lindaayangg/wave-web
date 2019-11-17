import React, {Component} from "react";
import {StyledComponentWrapper} from "../../res/styles";
import {
  StyledLeftGrid,
  StyledLeftGridWrapper,
  StyledReceiveIcon,
  StyledReceiveImage,
  StyledRightGrid,
  StyledTitleText
} from "./styles";
import {Grid} from "semantic-ui-react";
import strings from "../../res/strings";
import ReceiveWave from "../../components/ReceiveWave/ReceiveWave";

class Receive extends Component {

  renderLeftGrid() {
    return (
      <StyledLeftGridWrapper>
        <ReceiveWave/>
        <StyledReceiveImage src='https://www.transparenttextures.com/patterns/asfalt-light.png'/>
      </StyledLeftGridWrapper>
    )
  }

  renderRightGrid() {
    return (
      <>
        <StyledReceiveIcon name="download" size="huge"/>
        <StyledTitleText>
          {strings.receiveScreen.title}
        </StyledTitleText>
        {/*<StyledReceiveImage src='https://www.seekclipart.com/clipng/middle/311-3119939_send-us-a-note-clipart.png'/>*/}
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
    )
  }
}

export default Receive;