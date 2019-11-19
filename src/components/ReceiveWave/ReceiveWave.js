import React, {Component} from 'react';
import {
  StyledCancelButton,
  StyledCopyButton,
  StyledListenWrapper,
  StyledMessageHeader,
  StyledMessageIcon,
  StyledReceiveButton,
  StyledReceivedMessage,
  StyledReceivedMessagesDisplay,
  StyledReceivedMessagesWrapper
} from "./styles";
import strings from "../../res/strings";
import {Chirp, toAscii} from 'chirpsdk';
import axios from 'axios';
import {Icon} from "semantic-ui-react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {StyledSemanticToastContainer} from "../../res/styles";
import {toast} from "react-semantic-toasts";
import {animations, icons} from "../../res/constants";

class ReceiveWave extends Component {
  state = {
    startListening: false,
    receiveStatus: strings.receiveScreen.receiveStatus.listening,
    receivedMessage: '',
  };

  handleCopyToClipboard = () => {
    setTimeout(() => {
      toast({
        type: strings.snackbar.success,
        icon: icons.CHECK_CIRCLE,
        title: strings.snackbar.copy.copySuccessTitle,
        animation: animations.FADE,
        time: 1000,
      });
    }, 0);
  };

  async handleStartListeningOnClick() {
    this.sdk = await Chirp({
      key: '62B7Ab44b74C3E671a9cddd2a',
      onReceiving: () => {
        this.setState({
          receiveStatus: strings.receiveScreen.receiveStatus.receiving
        });
        console.log('Receiving Your Wave...');
      },
      onReceived: data => {
        if (data.length > 0) {
          if (data.length === 10) {
            if (toAscii(data).substring(0, 2) === 'wv' && toAscii(data).substring(2, 3) !== ' ') {
              axios
                .get('http://138.197.151.168:3000/waves/' + toAscii(data))
                .then(response => {
                  this.setState({
                    receiveStatus: strings.receiveScreen.receiveStatus.received,
                    receivedMessage: response.data.text,
                  });
                  console.log(response.data.text);
                  return response;
                })
                .catch(error => {
                  setTimeout(() => {
                    toast({
                      type: strings.snackbar.error,
                      icon: icons.EXCLAMATION_CIRCLE,
                      title: strings.snackbar.receive.text.errorCodeTitle,
                      description: strings.snackbar.receive.text.errorCodeDescription,
                      animation: animations.BOUNCE,
                      time: 3000,
                    });
                  }, 300);
                  console.log('No wave was found. ' + error);
                })
            }
          } else {
            this.setState({
              receiveStatus: strings.receiveScreen.receiveStatus.received,
              receivedMessage: toAscii(data),
            });
            console.log(toAscii(data));
          }
        } else {
          setTimeout(() => {
            toast({
              type: strings.snackbar.error,
              icon: icons.EXCLAMATION_CIRCLE,
              title: strings.snackbar.receive.text.receiveErrorTitle,
              description: strings.snackbar.receive.text.receiveErrorDescription,
              animation: animations.BOUNCE,
              time: 3000,
            });
          }, 300);
          console.error('Decode failed.');
        }
      }
    });
    await this.sdk.start();
    this.setState({startListening: true});
  };

  handleStopClick = () => {
    this.setState({
      startListening: false,
      receiveStatus: strings.receiveScreen.receiveStatus.listening,
      receivedMessage: '',
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

  renderReceivedMessage = () => {
    return (
      <StyledReceivedMessagesDisplay>
        <StyledMessageHeader>
          <StyledMessageIcon name='comment alternate' size='big'/>
          {this.state.receiveStatus}
        </StyledMessageHeader>
        <StyledReceivedMessagesWrapper>
          <CopyToClipboard
            text={this.state.receivedMessage}
            onCopy={this.handleCopyToClipboard}>
            <StyledReceivedMessage>
              {this.state.receivedMessage !== ''
                ? <StyledCopyButton icon circular size='tiny'>
                  <Icon name='copy'/>
                </StyledCopyButton>
                : null
              }
              {this.state.receivedMessage}
            </StyledReceivedMessage>
          </CopyToClipboard>
        </StyledReceivedMessagesWrapper>
      </StyledReceivedMessagesDisplay>
    )
  };

  render() {
    const {startListening} = this.state;
    return (
      <div>
        {startListening
          ? <div>
            {this.renderListenForWave()}
            {this.renderReceivedMessage()}
          </div>
          : this.renderReceiveButton()
        }
        <StyledSemanticToastContainer/>
      </div>
    )
  }
}

export default ReceiveWave;