import React, {Component} from 'react';
import {StyledComponentWrapper} from "../../res/styles";
import {
  StyledAnswerWrapper,
  StyledFAQImage,
  StyledFAQWrapper,
  StyledQuestionSectionWrapper,
  StyledTitleText
} from "./styles";
import strings from "../../res/strings";
import {Accordion, Grid, GridColumn} from "semantic-ui-react";

class FAQ extends Component {
  state = {
    activeIndex: null
  };

  renderTitle = () => {
    return (
      <StyledTitleText>
        {strings.faq.title}
      </StyledTitleText>
    )
  };

  renderQuestions = () => {
    const panels = [
      {
        key: 0,
        title: {
          content: strings.faq.question1,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer1}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 1,
        title: {
          content: strings.faq.question2,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer2}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 2,
        title: {
          content: strings.faq.question3,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer3}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 3,
        title: {
          content: strings.faq.question4,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer4}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 4,
        title: {
          content: strings.faq.question5,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer5}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 5,
        title: {
          content: strings.faq.question6,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer6}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 6,
        title: {
          content: strings.faq.question7,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer7}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 7,
        title: {
          content: strings.faq.question8,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer8}</StyledAnswerWrapper>
          ),
        },
      },
      {
        key: 8,
        title: {
          content: strings.faq.question9,
          icon: 'dropdown',
        },
        content: {
          content: (
            <StyledAnswerWrapper>{strings.faq.answer9}</StyledAnswerWrapper>
          ),
        },
      },
    ];
    return (
      <StyledQuestionSectionWrapper>
        <Accordion defaultActiveIndex={null} panels={panels} styled/>
      </StyledQuestionSectionWrapper>
    )
  };

  render() {
    return (
      <StyledComponentWrapper>
        <StyledFAQWrapper>
          <Grid columns={2} relaxed='very'>
            <GridColumn computer={10} tablet={16} mobile={16}>
              {this.renderTitle()}
              {this.renderQuestions()}
            </GridColumn>
            <GridColumn computer={6} tablet={16} mobile={16}>
              <StyledFAQImage src='https://www.seekclipart.com/clipng/middle/311-3119939_send-us-a-note-clipart.png'/>
            </GridColumn>
          </Grid>
        </StyledFAQWrapper>
      </StyledComponentWrapper>
    )
  }
}

export default FAQ;