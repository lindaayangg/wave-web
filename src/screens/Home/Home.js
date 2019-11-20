import React, {Component} from "react";
import {GridColumn, Image} from "semantic-ui-react";
import {StyledBody} from "../../res/styles";
import {
  StyledAppStoreBadgeWrapper,
  StyledGridLeftColumn,
  StyledGridWrapper,
  StyledLandingImage,
  StyledSubTitleText,
  StyledTitleText
} from "./styles";
import strings from "../../res/strings";
import apple_store from '../../res/images/apple_store_badge.svg';
import google_play from '../../res/images/google_play_badge.png';

class Home extends Component {
  render() {
    return (
      <>
        <StyledBody>
          <StyledGridWrapper columns={2}>
            <StyledGridLeftColumn width={7} verticalAlign='middle'>
              <StyledTitleText>{strings.homeScreen.title}</StyledTitleText>
              <StyledSubTitleText>{strings.homeScreen.subtitle}</StyledSubTitleText>
              <StyledAppStoreBadgeWrapper>
                <Image
                  src={google_play}
                  size='small'
                  href='http://google.com'
                  target='_blank'
                />
                <Image
                  src={apple_store}
                  size='small'
                  href='http://google.com'
                  target='_blank'
                />
              </StyledAppStoreBadgeWrapper>
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