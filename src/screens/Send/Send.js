import React, {Component} from 'react';
import DropzoneArea from "../Dropzone/Dropzone";
import {StyledButton} from "./styles";
import styles from './Send.module.css'

class Send extends Component {

  renderButtons() {
    return (
      <>
        <StyledButton>
          Send
        </StyledButton>
      </>
    )
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <DropzoneArea></DropzoneArea>
          {this.renderButtons()}
        </div>
      </>
    );
  }
}

export default Send;
