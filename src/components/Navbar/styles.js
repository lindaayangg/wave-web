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
  }
`;

export const StyledMenuItem = styled(Menu.Item)`
  &&& {
    margin: 25px !important;
    font-weight: 900 !important;
    &:hover {
      color: #FA7268 !important;
    }
    &:active {
      color: #FA7268 !important;
    }
  }
`;



