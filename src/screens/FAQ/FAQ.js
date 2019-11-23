import React, {Component} from 'react';
import {StyledComponentWrapper} from "../../res/styles";
import {StyledFAQImage, StyledFAQWrapper, StyledQuestionSectionWrapper, StyledTitleText} from "./styles";
import strings from "../../res/strings";
import {Accordion, Grid, GridColumn} from "semantic-ui-react";
import wave_faq from '../../res/images/wave_faq.png';

class FAQ extends Component {
  state = {
    activeIndex: null
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
            <span>{strings.faq.answer1}</span>
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
            <span>{strings.faq.answer2}</span>
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
            <span>{strings.faq.answer3}</span>
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
            <span>{strings.faq.answer4}</span>
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
            <span>{strings.faq.answer5}</span>
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
            <span>{strings.faq.answer6}</span>
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
            <span>{strings.faq.answer7}</span>
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
            <span>{strings.faq.answer8}</span>
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
            <span>{strings.faq.answer9}</span>
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
              <StyledFAQImage src={wave_faq}/>
            </GridColumn>
          </Grid>
        </StyledFAQWrapper>
      </StyledComponentWrapper>
    )
  }
}

export default FAQ;