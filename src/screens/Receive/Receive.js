import React, {Component} from "react";
import {StyledComponentWrapper} from "../../res/styles";
import {StyledLeftGrid, StyledReceiveIcon, StyledRightGrid, StyledTitleText} from "./styles";
import {Grid} from "semantic-ui-react";
import strings from "../../res/strings";
import ReceiveWave from "../../components/ReceiveWave/ReceiveWave";

class Receive extends Component {

  renderLeftGrid() {
    return (
      <ReceiveWave/>
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