import styled from "styled-components";
import {Tab} from "semantic-ui-react";

export const StyledTab = styled(Tab)`
  &&& {
    width: -webkit-fill-available;
  }
`;

export const StyledTabPane = styled(Tab.Pane)`
  &&& {
    height: 400px;
    padding: 20px;
    border-radius: 10px !important;
  }
`;