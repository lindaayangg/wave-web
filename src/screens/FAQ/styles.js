import styled from "styled-components";
import {Header, Image} from "semantic-ui-react";

export const StyledFAQWrapper = styled.div`
  &&& {
    padding: 60px 100px !important;
    text-align: left;
    width: 100%;
    @media (max-width: 767px) {
      padding: 60px 50px !important;
    }
  }
`;

export const StyledTitleText = styled(Header)`
  &&& {
    color: #FA7268;
    font-size: 35px;
  }
`;

export const StyledQuestionSectionWrapper = styled.div`
  &&& { 
    margin-top: 30px;
  }
`;

export const StyledAnswerWrapper = styled.span`
  &&& { 
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
`;

export const StyledFAQImage = styled(Image)`
  &&& {
    margin-top: 70px;
    @media (max-width: 991px) {
      width: 500px;
    }
  }
`;