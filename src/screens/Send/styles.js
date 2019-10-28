import styled from 'styled-components';
import {Button, TextArea} from "semantic-ui-react";

export const StyledButton = styled(Button)`
  &&& {
    margin: 10px;
    color: #ffffff;
    background-color: #FA7268;
    width: 100px
  }
`;

export const StyledDiv = styled.div`
  &&& {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTextArea = styled(TextArea)`
  &&& {
    min-width: 320px;
    border-color: #FA7268;
    &:focus {
      border-color: #002E54;
    }
  }
`;