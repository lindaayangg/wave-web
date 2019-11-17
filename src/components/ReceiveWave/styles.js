import styled from "styled-components";
import {Button} from "semantic-ui-react";

export const StyledReceiveButton = styled(Button)`
  &&& {
    color: #ffffff;
    background-color: #FA7268;
    width: 200px;
    height: 200px;
    line-height: 1.5rem;
  }
`;

export const StyledCancelButton = styled(Button)`
  &&& {
    color: #ffffff;
    background-color: #FA7268;
    width: 100px;
  }
`;

export const StyledListenWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;