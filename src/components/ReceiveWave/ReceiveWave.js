import React, {Component} from 'react';
import {
  StyledCancelButton,
  StyledCopyButton,
  StyledListenWrapper,
  StyledMessageHeader,
  StyledMessageIcon,
  StyledReceiveButton,
  StyledReceiveButtonWrapper,
  StyledReceivedImageWrapper,
  StyledReceivedMessage,
  StyledReceivedMessagesDisplay,
  StyledReceivedMessagesWrapper,
  StyledReceiveWaveContainer
} from "./styles";
import strings from "../../res/strings";
import {Chirp, toAscii} from 'chirpsdk';
import axios from 'axios';
import {Icon, Image} from "semantic-ui-react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {StyledSemanticToastContainer} from "../../res/styles";
import {toast} from "react-semantic-toasts";
import {animations, icons} from "../../res/constants";
import {ScaleLoader} from 'react-spinners';

class ReceiveWave extends Component {
  state = {
    startListening: false,
    receiveStatus: strings.receiveScreen.receiveStatus.start,
    receivedMessage: null,
    receivedFiles: [],
  };

  handleOpenInNewTab(url) {
    window.open(url, '_blank');
  }

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
    this.setState({
      receiveStatus: strings.receiveScreen.receiveStatus.listening
    });
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
                  if (response.data.text !== null) {
                    this.setState({
                      receiveStatus: strings.receiveScreen.receiveStatus.received,
                      receivedMessage: response.data.text,
                    });
                    console.log(response.data.text);
                  } else {
                    this.setState({
                      receiveStatus: strings.receiveScreen.receiveStatus.received,
                      receivedMessage: response.data.text,
                      receivedFiles: response.data.files,
                    });
                    console.log(response.data.text);
                    console.log(response.data.files);
                  }
                  return response;
                })
                .catch(error => {
                  this.setState({
                    receiveStatus: strings.receiveScreen.receiveStatus.failed,
                  });
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
          this.setState({
            receiveStatus: strings.receiveScreen.receiveStatus.failed,
          });
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
      receiveStatus: strings.receiveScreen.receiveStatus.start,
      receivedMessage: null,
      receivedFiles: [],
    });
    this.sdk.stop();
  };

  renderReceiveButton = () => {
    return (
      <StyledReceiveButtonWrapper>
        <StyledReceiveButton
          circular
          onClick={() => this.handleStartListeningOnClick()}
        >
          {strings.receiveScreen.clickListen}
        </StyledReceiveButton>
      </StyledReceiveButtonWrapper>
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
        <ScaleLoader
          color={'#FA7268'}
          height={50}
          width={7}
          radius={10}
          margin={'3px'}
        />
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
          {this.state.receivedMessage !== null
            ?
            <CopyToClipboard
              text={this.state.receivedMessage}
              onCopy={this.handleCopyToClipboard}>
              <StyledReceivedMessage>
                <StyledCopyButton icon circular size='tiny'>
                  <Icon name='copy'/>
                </StyledCopyButton>
                {this.state.receivedMessage}
              </StyledReceivedMessage>
            </CopyToClipboard>
            : this.state.receivedFiles.length !== 0
              ? <StyledReceivedImageWrapper>
                {this.handleOpenInNewTab(this.state.receivedFiles[0])}
                <Image size='medium'
                       src={this.state.receivedFiles[0].replace('?disposition=attachment', '')}/>
              </StyledReceivedImageWrapper>
              : null
          }
        </StyledReceivedMessagesWrapper>
      </StyledReceivedMessagesDisplay>
    )
  };

  render() {
    const {startListening} = this.state;
    return (
      <div>
        {startListening
          ? this.renderListenForWave()
          : this.renderReceiveButton()
        }
        {this.renderReceivedMessage()}
        <StyledSemanticToastContainer/>
      </div>
    )
  }
}

export default ReceiveWave;