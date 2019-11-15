import styled from "styled-components";
import {SemanticToastContainer} from "react-semantic-toasts";

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