import styled from "styled-components";
import {Button, GridColumn, Header, Image} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

export const StyledErrorWrapper = styled.div`
  &&& {
    padding: 60px 100px !important;
    text-align: left;
    width: 100%;
    @media (max-width: 767px) {
      padding: 60px 50px 30px 50px !important;
    }
  }
`;

export const StyledErrorHeader = styled(Header)`
  &&& {
    color: #FA7268;
    font-weight: 900;
    font-size: 35px;
  }
`;

export const StyledErrorSubheader = styled(HeaderSubHeader)`
  &&& {
    font-size: 15px;
  }
`;

export const StyledRightGridWrapper = styled(GridColumn)`
  &&& {
    padding-right: 60px !important;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    color: #FFFFFF;
    background-color: #FA7268;
    width: 120px;
    margin-right: 10px;
    &:focus {
      background-color: #FA7268;
      color: #FFFFFF;
    }
    &:hover {
      background-color: #FA7268;
      color: #FFFFFF;
      box-shadow: 0 3px 3px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  &&& {
    margin-top: 20px;
  }
`;

export const StyledErrorImage = styled(Image)`
  &&& {
    @media (max-width: 991px) {
      width: 400px;
      margin-top: 20px;
    }
  }
`;