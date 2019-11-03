import React, {Component} from "react";
import {
    StyledContainerGridColumn,
    StyledCopyRight,
    StyledDiv,
    StyledDivider,
    StyledHeader,
    StyledInfoGridRow,
    StyledListItem,
    StyledSocialMediaButton,
    StyledSocialMediaContainer
} from "./styles";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Icon} from "semantic-ui-react";
import List from "semantic-ui-react/dist/commonjs/elements/List";

class Footer extends Component {
  render() {
    return (
      <StyledDiv>
        <Grid>
          <StyledContainerGridColumn width={5}>
            WAVE LOGO <Icon name="heart"/>
            <StyledInfoGridRow>
              <StyledHeader>About Us</StyledHeader>
              <div>Placeholder message</div>
            </StyledInfoGridRow>
            <StyledInfoGridRow>
              <StyledHeader>Contact Us</StyledHeader>
              <List>
                <List.Item>
                  <List.Icon name='users'/>
                  <List.Content>Wave Inc.</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='map marker alternate'/>
                  <List.Content>Waterloo, Ontario</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail'/>
                  <List.Content>waveinc@gmail.com</List.Content>
                </List.Item>
              </List>
            </StyledInfoGridRow>
          </StyledContainerGridColumn>
          <StyledContainerGridColumn width={4}>
            <StyledHeader>Information</StyledHeader>
            <List link>
              <StyledListItem>About Us</StyledListItem>
              <StyledListItem>FAQ</StyledListItem>
            </List>
          </StyledContainerGridColumn>
          <StyledContainerGridColumn width={4}>
            <StyledHeader>Placeholder</StyledHeader>
          </StyledContainerGridColumn>
        </Grid>
        <StyledDivider/>
        <StyledSocialMediaContainer>
          <StyledSocialMediaButton circular icon>
            <Icon name="facebook f"/>
          </StyledSocialMediaButton>
          <StyledSocialMediaButton circular icon>
            <Icon name="google"/>
          </StyledSocialMediaButton>
          <StyledSocialMediaButton circular icon>
            <Icon name="github"/>
          </StyledSocialMediaButton>
          <StyledCopyRight>2019 © Wave Inc. All Rights Reserved.</StyledCopyRight>
        </StyledSocialMediaContainer>
      </StyledDiv>
    )
  }
}

export default Footer;