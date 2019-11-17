import React, {Component} from 'react';
import {StyledCancelButton, StyledListenWrapper, StyledReceiveButton} from "./styles";
import strings from "../../res/strings";

class ReceiveWave extends Component {
  state = {
    receiveClicked: false
  };

  handleReceiveOnClick = () => {
    this.setState({
      receiveClicked: true
    })
  };

  handleCancelClick = () => {
    this.setState({
      receiveClicked: false
    })
  };

  renderReceiveButton = () => {
    return (
      <StyledReceiveButton
        circular
        onClick={this.handleReceiveOnClick}
      >
        {strings.receiveScreen.clickListen}
      </StyledReceiveButton>
    )
  };

  renderCancelButton = () => {
    return (
      <StyledCancelButton
        circular
        onClick={this.handleCancelClick}
      >
        {strings.receiveScreen.cancel}
      </StyledCancelButton>
    )
  };

  renderListenForWave = () => {
    return (
      <StyledListenWrapper>
        Spinner Placeholder
        {this.renderCancelButton()}
      </StyledListenWrapper>
    )
  };

  render() {
    const {receiveClicked} = this.state;
    return (
      <div>
        {receiveClicked
          ? this.renderListenForWave()
          : this.renderReceiveButton()}
      </div>
    )
  }

  s
}

export default ReceiveWave;