import styled from "styled-components";
import {Button, TextArea} from "semantic-ui-react";

export const StyledButtonsWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    color: #ffffff;
    background-color: #FA7268;
    width: 100px;
    margin: 10px 0px 0px 10px;
  }
`;

export const StyledTextArea = styled(TextArea)`
  &&& {
    border-color: #FA7268;
    &:focus {
      border-color: #002E54;
    }
  }
`;