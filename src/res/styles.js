import styled from "styled-components";
import {SemanticToastContainer} from "react-semantic-toasts";
import {Button} from "semantic-ui-react";

export const StyledBody = styled.div`
  &&& {
    height: 100vh;
    margin-top: 72px;
  }
`;

export const StyledSemanticToastContainer = styled(SemanticToastContainer)`
  &&& {
    margin-top: 10px !important;
  }
`;

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
    &:focus {
      background-color: #FA7268;
      color: #ffffff;
    }
    &:hover {
      background-color: #FA7268;
      color: #ffffff;
      box-shadow: 0 3px 3px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
    }
  }
`;
