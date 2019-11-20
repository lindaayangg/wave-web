import React, {Component} from "react";
import {
  StyledAppleStoreBadge, StyledAppStoreBadgeWrapper,
  StyledContainerGridColumn,
  StyledCopyRight,
  StyledDivider,
  StyledFooterWrapper, StyledGooglePlayBadge,
  StyledHeader,
  StyledInfoGridRow,
  StyledListItem,
  StyledListItemContact,
  StyledListWrapper,
  StyledSocialMediaButton,
  StyledSocialMediaContainer
} from "./styles";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Icon, Image} from "semantic-ui-react";
import List from "semantic-ui-react/dist/commonjs/elements/List";
import strings from "../../res/strings";
import {Link} from "react-router-dom";
import google_play from '../../res/images/google_play_badge.png';
import apple_store from '../../res/images/apple_store_badge.svg';

class Footer extends Component {
  render() {
    return (
      <StyledFooterWrapper>
        <Grid relaxed='very'>
          <StyledContainerGridColumn width={4}>
            WAVE LOGO
            <Icon name="heart"/>
            <StyledInfoGridRow>
              <StyledHeader>About Us</StyledHeader>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </StyledInfoGridRow>
          </StyledContainerGridColumn>
          <StyledContainerGridColumn width={4}>
            <StyledHeader>{strings.footer.companyTitle}</StyledHeader>
            <StyledListWrapper>
              <StyledListItem as={Link} to='/about'>About Us</StyledListItem>
              <StyledListItem as={Link} to='/faq'>FAQ</StyledListItem>
              <StyledListItem as={Link} to='/placeholder'>Placeholder</StyledListItem>
            </StyledListWrapper>
          </StyledContainerGridColumn>
          <StyledContainerGridColumn width={4}>
            <StyledHeader>{strings.footer.contact}</StyledHeader>
            <StyledListWrapper>
              <StyledListItemContact>
                <List.Icon name='users'/>
                <List.Content>{strings.footer.companyName}</List.Content>
              </StyledListItemContact>
              <StyledListItemContact>
                <List.Icon name='map marker alternate'/>
                <List.Content>{strings.footer.location}</List.Content>
              </StyledListItemContact>
              <StyledListItemContact>
                <List.Icon name='mail'/>
                <List.Content href='mailto:xiaoling.yang@uwaterloo.ca'>{strings.footer.email}</List.Content>
              </StyledListItemContact>
            </StyledListWrapper>
          </StyledContainerGridColumn>
          <StyledContainerGridColumn width={4}>
            <StyledHeader>{strings.footer.products}</StyledHeader>
            <StyledAppStoreBadgeWrapper>
              <StyledGooglePlayBadge
                src={google_play}
                size='small'
                href='http://google.com'
                target='_blank'
              />
              <StyledAppleStoreBadge
                src={apple_store}
                size='small'
                href='http://google.com'
                target='_blank'
              />
            </StyledAppStoreBadgeWrapper>
          </StyledContainerGridColumn>
        </Grid>
        <StyledDivider/>
        <StyledSocialMediaContainer>
          <StyledSocialMediaButton
            circular
            icon
            href='https://www.facebook.com/lindayanggg'
            target='_blank'
          >
            <Icon name="facebook f"/>
          </StyledSocialMediaButton>
          <StyledSocialMediaButton
            circular
            icon
            href='https://github.com/lindaayangg/Wave-Web'
            target='_blank'
          >
            <Icon name="github"/>
          </StyledSocialMediaButton>
          <StyledCopyRight>{strings.footer.copyRight}</StyledCopyRight>
        </StyledSocialMediaContainer>
      </StyledFooterWrapper>
    )
  }
}

export default Footer;