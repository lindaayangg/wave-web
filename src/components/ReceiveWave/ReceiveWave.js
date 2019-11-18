import React, {Component} from 'react';
import {StyledCancelButton, StyledListenWrapper, StyledReceiveButton} from "./styles";
import strings from "../../res/strings";
import {Chirp, toAscii} from 'chirpsdk';

class ReceiveWave extends Component {
  state = {
    startListening: false,
  };

  async handleStartListeningOnClick() {
    this.sdk = await Chirp({
      key: '62B7Ab44b74C3E671a9cddd2a',
      onReceiving: () => {
        console.log('Receiving');
      },
      onReceived: data => {
        if (data.length > 0) {
          console.log(toAscii(data));
        } else {
          console.error('Decode failed');
        }
      }
    });
    await this.sdk.start();
    this.setState({startListening: true});
  };

  handleStopClick = () => {
    this.setState({
      startListening: false
    });
    this.sdk.stop();
  };

  renderReceiveButton = () => {
    return (
      <StyledReceiveButton
        circular
        onClick={() => this.handleStartListeningOnClick()}
      >
        {strings.receiveScreen.clickListen}
      </StyledReceiveButton>
    )
  };

  renderCancelButton = () => {
    return (
      <StyledCancelButton
        circular
        onClick={this.handleStopClick}
      >
        {strings.receiveScreen.stop}
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
    const {startListening} = this.state;
    return (
      <div>
        {startListening
          ? this.renderListenForWave()
          : this.renderReceiveButton()}
      </div>
    )
  }
}

export default ReceiveWave;