import styled from "styled-components";
import {Menu} from "semantic-ui-react";

export const StyledDiv = styled.div`
  &&& {
    background-color: #fff;
  }
`;

export const StyledMenu = styled(Menu)`
  &&& {
    height: 72px;
    border-bottom: 1px solid rgba(34,36,38,.15) !important;
    padding-left: 25px !important;
    background-color: #fff !important;
  }
`;

export const StyledMenuItem = styled(Menu.Item)`
  &&& {
    font-size: 15px !important;
    margin: 15px !important;
    font-weight: 900 !important;
    color: #000 !important;
    &:hover {
      color: #FA7268 !important;
    }
    &:active {
      color: #FA7268 !important;
    }
  }
`;



