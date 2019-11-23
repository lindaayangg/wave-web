import React, {Component} from 'react';
import {
  StyledLeftGrid,
  StyledRightGrid,
  StyledSendIcon,
  StyledSendImage,
  StyledTabWrapper,
  StyledTitleText,
  StyledTitleWrapper
} from "./styles";
import strings from "../../res/strings";
import Tab from "../../components/Tab/Tab";
import {StyledComponentWrapper} from "../../res/styles";
import {Grid} from "semantic-ui-react";
import wave_send from '../../res/images/wave_send.png';

class Send extends Component {

  renderTitle() {
    return (
      <StyledTitleWrapper>
        <StyledSendIcon name="send" size="huge"/>
        <StyledTitleText>
          {strings.sendScreen.title}
        </StyledTitleText>
      </StyledTitleWrapper>
    )
  }

  renderLeftGrid() {
    return (
      <>
        {this.renderTitle()}
        <StyledTabWrapper>
          <Tab/>
        </StyledTabWrapper>
      </>
    )
  }

  render() {
    return (
      <StyledComponentWrapper>
        <Grid columns={2}>
          <StyledLeftGrid computer={10} tablet={16} mobile={16} verticalAlign="middle">
            {this.renderLeftGrid()}
          </StyledLeftGrid>
          <StyledRightGrid computer={6} tablet={16} mobile={16} verticalAlign='middle'>
            <StyledSendImage src={wave_send}/>
          </StyledRightGrid>
        </Grid>
      </StyledComponentWrapper>
    );
  }
}

export default Send;
