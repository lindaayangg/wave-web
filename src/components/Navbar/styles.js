import styled from "styled-components";
import {Image, Menu} from "semantic-ui-react";

export const StyledDiv = styled.div`
  &&& {
    background-color: #FFFFFF;
  }
`;

export const StyledMenu = styled(Menu)`
  &&& {
    height: 72px;
    padding: 10px 70px 10px 70px !important;
    background-color: #FFFFFF !important;
    display: flex;
    justify-content: flex-end;
    border-bottom: ${props => props.scrolltop ? 'none' : '1px solid rgba(34,36,38,.15) !important'}
    @media (max-width: 767px) {
      padding: 10px 0px !important;
    }
  }
`;

export const StyledMenuItem = styled(Menu.Item)`
  &&& {
    font-size: 17px !important;
    padding: 15px 30px;
    font-weight: 900 !important;
    color: #000 !important;
    &:hover {
      color: #FA7268 !important;
    }
    &:active {
      color: #FA7268 !important;
    }
    @media (max-width: 767px) {
      padding: 15px 15px !important;
    }
  }
`;

export const StyledMenuItemsWrapper = styled.div`
  &&& {
    margin-left: auto!important;
    padding: 15px;
  }
`;

export const StyledLogoWrapper = styled.div`
  &&& {
    padding: 10px 15px;
  }
`;



