import React, {Component} from 'react';
import {
  StyledLeftGrid,
  StyledRightGrid,
  StyledSendIcon,
  StyledSendImage,
  StyledTitleText,
  StyledWrapper
} from "./styles";
import strings from "../../res/strings";
import Tab from "../../components/Tab/Tab";

class Send extends Component {

  renderLeftGrid() {
    return (
      <Tab/>
    )
  }

  renderRightGrid() {
    return (
      <>
        <StyledSendIcon name="send" size="huge"/>
        <StyledTitleText>
          {strings.sendScreen.title}
        </StyledTitleText>
        {/*<StyledSendImage src='https://webdevinsights.com/wp-content/uploads/2019/08/hosting-800x445.jpg'/>*/}
        <StyledSendImage src='https://beyondmart.com/web-development-rajkot.png'/>
      </>
    )
  }

  render() {
    return (
      <StyledWrapper columns={2} relaxed="very">
        <StyledLeftGrid width={9} verticalAlign="middle">
          {this.renderLeftGrid()}
        </StyledLeftGrid>
        <StyledRightGrid width={7} verticalAlign="middle">
          {this.renderRightGrid()}
        </StyledRightGrid>
      </StyledWrapper>
    );
  }
}

export default Send;
