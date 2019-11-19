import React, {Component} from "react";
import {GridColumn} from "semantic-ui-react";
import {StyledBody} from "../../res/styles";
import {
  StyledGridLeftColumn,
  StyledGridWrapper,
  StyledLandingImage,
  StyledSubTitleText,
  StyledTitleText
} from "./styles";
import strings from "../../res/strings";

class Home extends Component {
  render() {
    return (
      <>
        <StyledBody>
          <StyledGridWrapper columns={2}>
            <StyledGridLeftColumn width={7} verticalAlign='middle'>
              <StyledTitleText>{strings.homeScreen.title}</StyledTitleText>
              <StyledSubTitleText>{strings.homeScreen.subtitle}</StyledSubTitleText>
            </StyledGridLeftColumn>
            <GridColumn width={9}>
              <StyledLandingImage src='https://polymagnus.com/svg/services/webDesign.svg'/>
            </GridColumn>
          </StyledGridWrapper>
        </StyledBody>
      </>
    )
  }
}

export default Home;