import React, {Component} from "react";
import {StyledComponentWrapper, StyledFullHeightComponentWrapper} from "../../res/styles";
import {
  StyledButton,
  StyledButtonWrapper,
  StyledErrorHeader,
  StyledErrorImage,
  StyledErrorSubheader,
  StyledErrorWrapper,
  StyledLeftGridWrapper, StyledRightGridWrapper
} from "./styles";
import {Grid, GridColumn} from "semantic-ui-react";
import strings from "../../res/strings";
import wave_404 from '../../res/images/wave_404.png';

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
      <StyledFullHeightComponentWrapper>
        <StyledErrorWrapper>
          <Grid columns={2}>
            <GridColumn computer={10} tablet={16} mobile={16} verticalAlign='middle'>
              <StyledErrorHeader>
                {strings.error.errorMessage}
              </StyledErrorHeader>
              <StyledErrorSubheader>
                {strings.error.errorDescription}
              </StyledErrorSubheader>
              {this.renderButtons()}
            </GridColumn>
            <StyledRightGridWrapper computer={6} tablet={16} mobile={16} verticalAlign='middle'>
              <StyledErrorImage src={wave_404}/>
            </StyledRightGridWrapper>
          </Grid>
        </StyledErrorWrapper>
      </StyledFullHeightComponentWrapper>
    )
  }
}

export default Error;