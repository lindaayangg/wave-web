import React, {Component} from "react";
import {StyledComponentWrapper} from "../../res/styles";
import {
  StyledButton,
  StyledButtonWrapper,
  StyledErrorHeader,
  StyledErrorImage,
  StyledErrorSubheader,
  StyledErrorWrapper,
  StyledLeftGridWrapper
} from "./styles";
import {Grid, GridColumn} from "semantic-ui-react";
import strings from "../../res/strings";

class Error extends Component {

  renderButtons = () => {
    return (
      <StyledButtonWrapper>
        <StyledButton
          circular
          href="/">
          {strings.error.homeButton}
        </StyledButton>
        <StyledButton
          circular
          href='mailto:shiwei.zhang@uwaterloo.ca'>
          {strings.error.contactUsButton}
        </StyledButton>
      </StyledButtonWrapper>
    )
  };

  render() {
    return (
      <StyledComponentWrapper>
        <StyledErrorWrapper>
          <Grid columns={2} relaxed='very'>
            <StyledLeftGridWrapper computer={10} verticalAlign='middle'>
              <StyledErrorHeader>
                {strings.error.errorMessage}
              </StyledErrorHeader>
              <StyledErrorSubheader>
                {strings.error.errorDescription}
              </StyledErrorSubheader>
              {this.renderButtons()}
            </StyledLeftGridWrapper>
            <GridColumn computer={6}>
              <StyledErrorImage src='https://www.seekclipart.com/clipng/middle/311-3119939_send-us-a-note-clipart.png'/>
            </GridColumn>
          </Grid>
        </StyledErrorWrapper>
      </StyledComponentWrapper>
    )
  }
}

export default Error;