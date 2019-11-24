import styled from "styled-components";
import {SemanticToastContainer} from "react-semantic-toasts";
import {Button} from "semantic-ui-react";

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
    color: #FFFFFF;
    background-color: #FA7268;
    width: 100px;
    margin: 10px 0px 0px 10px;
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

export const StyledComponentWrapper = styled.div`
  &&& {
    margin-top: 72px;
    margin-bottom: 50px !important;
    display: flex;
    vertical-align: middle;
    height: fit-content;
  }
`;

export const StyledFullHeightComponentWrapper = styled.div`
  &&& {
    margin-top: 72px;
    margin-bottom: 50px !important;
    display: flex;
    align-items: center;
    height: 100vh;
    @media (max-width: 767px) {
      height: fit-content;
    }
  }
`;
