import styled from "styled-components";
import {TextArea} from "semantic-ui-react";

export const StyledTextArea = styled(TextArea)`
  &&& {
    border-color: #FA7268;
    height: 320px;
    &:focus {
      border-color: #002E54;
    }
    @media (min-width: 2000px) {
      height: 410px; 
    }
  }
`;