import React, {Component} from 'react';
import {StyledComponentWrapper} from "../../res/styles";
import {
  StyledAboutText,
  StyledAboutTextWrapper,
  StyledAboutWrapper,
  StyledArrows,
  StyledCarouselWrapper,
  StyledHackathonDescription,
  StyledHackathonDescriptionWrapper,
  StyledHackathonGrid,
  StyledHackathonTitle,
  StyledHackthonCardWrapper,
  StyledMemberDetailLeftWrapper,
  StyledMemberDetailRightWrapper,
  StyledMemberInfo,
  StyledMemberName,
  StyledMemberTitle,
  StyledMemberWrapper,
  StyledSectionWrapper,
  StyledSocialMediaButton,
  StyledSubTitleText,
  StyledTeamWrapper,
  StyledTitleText
} from "./styles";
import strings from "../../res/strings";
import {Card, GridColumn, Icon, Image} from "semantic-ui-react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import hackthe6ix_demo2 from '../../res/images/hackthe6ix_demo2.jpg';
import hackthe6ix_demo1 from '../../res/images/hackthe6ix_demo1.jpg';
import hackthe6ix_stage3 from '../../res/images/hackthe6ix_stage3.jpg';
import hackthe6ix_stage1 from '../../res/images/hackthe6ix_stage1.jpg';
import hackthe6ix_stage2 from '../../res/images/hackthe6ix_stage2.jpg';
import linda from '../../res/images/linda.jpg';

class About extends Component {

  renderAboutUs = () => {
    return (
      <div>
        <StyledTitleText>
          {strings.aboutScreen.aboutUsTitle}
        </StyledTitleText>
        <StyledSubTitleText>
          {strings.aboutScreen.subtitle}
        </StyledSubTitleText>
        <StyledAboutTextWrapper>
          <StyledAboutText>
            {strings.aboutScreen.aboutText}
          </StyledAboutText>
        </StyledAboutTextWrapper>
      </div>
    )
  };

  renderCarousel = () => {
    const carouselSettings = {
      infinite: true,
      animationSpeed: 1000,
      slidesPerPage: 1,
      arrowLeft: <StyledArrows name="angle double left" size='large'/>,
      arrowRight: <StyledArrows name="angle double right" size='large'/>,
      addArrowClickHandler: true,
    };
    return (
      <Carousel {...carouselSettings}>
        <StyledHackthonCardWrapper>
          <Card>
            <Image src={hackthe6ix_demo1} size='medium'/>
            <Card.Content>
              <Card.Description>
                {strings.aboutScreen.inspiration.hackathon.pictureDescription1}
              </Card.Description>
            </Card.Content>
          </Card>
        </StyledHackthonCardWrapper>
        <StyledHackthonCardWrapper>
          <Card>
            <Image src={hackthe6ix_demo2} size='medium'/>
            <Card.Content>
              <Card.Description>
                {strings.aboutScreen.inspiration.hackathon.pictureDescription1}
              </Card.Description>
            </Card.Content>
          </Card>
        </StyledHackthonCardWrapper>
        <StyledHackthonCardWrapper>
          <Card>
            <Image src={hackthe6ix_stage1} size='medium'/>
            <Card.Content>
              <Card.Description>
                {strings.aboutScreen.inspiration.hackathon.pictureDescription2}
              </Card.Description>
            </Card.Content>
          </Card>
        </StyledHackthonCardWrapper>
        <StyledHackthonCardWrapper>
          <Card>
            <Image src={hackthe6ix_stage2} size='medium'/>
            <Card.Content>
              <Card.Description>
                {strings.aboutScreen.inspiration.hackathon.pictureDescription2}
              </Card.Description>
            </Card.Content>
          </Card>
        </StyledHackthonCardWrapper>
        <StyledHackthonCardWrapper>
          <Card>
            <Image src={hackthe6ix_stage3} size='medium'/>
            <Card.Content>
              <Card.Description>
                {strings.aboutScreen.inspiration.hackathon.pictureDescription2}
              </Card.Description>
            </Card.Content>
          </Card>
        </StyledHackthonCardWrapper>
      </Carousel>
    )
  };

  renderInspiration = () => {
    return (
      <StyledSectionWrapper>
        <StyledTitleText>
          {strings.aboutScreen.inspiration.title}
        </StyledTitleText>
        <StyledCarouselWrapper>
          <StyledHackathonGrid columns={2}>
            <GridColumn width={7}>
              {this.renderCarousel()}
            </GridColumn>
            <StyledHackathonDescriptionWrapper width={9}>
              <StyledHackathonTitle>
                {strings.aboutScreen.inspiration.hackathon.title}
              </StyledHackathonTitle>
              <StyledHackathonDescription>
                {strings.aboutScreen.inspiration.hackathon.description}
              </StyledHackathonDescription>
            </StyledHackathonDescriptionWrapper>
          </StyledHackathonGrid>
        </StyledCarouselWrapper>
      </StyledSectionWrapper>
    )
  };

  renderMeetTeam = () => {
    return (
      <StyledSectionWrapper>
        <StyledTitleText>
          {strings.aboutScreen.meetTeam.title}
        </StyledTitleText>
        <StyledTeamWrapper>
          <StyledMemberWrapper columns={2}>
            <GridColumn width={5}>
              <Image src='https://devlinda.com/assets/img/profile.png' rounded/>
            </GridColumn>
            <StyledMemberDetailLeftWrapper width={11}>
              <StyledMemberName>
                {strings.aboutScreen.meetTeam.david.name}
              </StyledMemberName>
              <StyledMemberTitle>
                {strings.aboutScreen.meetTeam.david.title}
              </StyledMemberTitle>
              <StyledMemberInfo>
                {strings.aboutScreen.meetTeam.david.detail}
              </StyledMemberInfo>
              <StyledSocialMediaButton
                icon
                circular
                href='https://www.linkedin.com/in/davidhqr/'
                target='_blank'
              >
                <Icon name='linkedin'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='https://github.com/davidhqr'
                target='_blank'
              >
                <Icon name='github alternate'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='https://devdavid.com/'
                target='_blank'
              >
                <Icon name='linkify'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='mailto:shiwei.zhang@uwaterloo.ca'
                target='_blank'
              >
                <Icon name='mail'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='https://www.facebook.com/davidhqr'
                target='_blank'
              >
                <Icon name='facebook f'/>
              </StyledSocialMediaButton>
            </StyledMemberDetailLeftWrapper>
          </StyledMemberWrapper>
        </StyledTeamWrapper>
        <StyledTeamWrapper>
          <StyledMemberWrapper columns={2}>
            <StyledMemberDetailRightWrapper width={11}>
              <StyledMemberName>
                {strings.aboutScreen.meetTeam.linda.name}
              </StyledMemberName>
              <StyledMemberTitle>
                {strings.aboutScreen.meetTeam.linda.title}
              </StyledMemberTitle>
              <StyledMemberInfo>
                {strings.aboutScreen.meetTeam.linda.detail}
              </StyledMemberInfo>
              <StyledSocialMediaButton
                icon
                circular
                href='https://www.linkedin.com/in/lindaayangg/'
                target='_blank'
              >
                <Icon name='linkedin'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='https://github.com/lindaayangg'
                target='_blank'
              >
                <Icon name='github alternate'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='https://devlinda.com/'
                target='_blank'
              >
                <Icon name='linkify'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='mailto:xiaoling.yang@uwaterloo.ca'
                target='_blank'
              >
                <Icon name='mail'/>
              </StyledSocialMediaButton>
              <StyledSocialMediaButton
                icon
                circular
                href='https://www.facebook.com/lindayanggg'
                target='_blank'
              >
                <Icon name='facebook f'/>
              </StyledSocialMediaButton>
            </StyledMemberDetailRightWrapper>
            <GridColumn width={5}>
              <Image src={linda} rounded/>
            </GridColumn>
          </StyledMemberWrapper>
        </StyledTeamWrapper>
      </StyledSectionWrapper>
    )
  };

  render() {
    return (
      <StyledComponentWrapper>
        <StyledAboutWrapper>
          {this.renderAboutUs()}
          {this.renderMeetTeam()}
          {this.renderInspiration()}
        </StyledAboutWrapper>
      </StyledComponentWrapper>
    )
  }
}

export default About;