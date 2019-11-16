import styled from "styled-components";
import {TextArea} from "semantic-ui-react";

export const StyledTextArea = styled(TextArea)`
  &&& {
    border-color: #FA7268;
    &:focus {
      border-color: #002E54;
    }
  }
`;