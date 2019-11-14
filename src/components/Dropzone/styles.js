import styled from 'styled-components';
import {GridRow, Icon} from "semantic-ui-react";
import {SemanticToastContainer} from 'react-semantic-toasts';

export const StyledGridRow = styled(GridRow)`
  &&& {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledDropzoneDiv = styled.div`
  &&& {
    position: relative;
    min-height: 220px;
    background-color: #FCF3F2;
    border-color: #FA7268;
    border-width: medium;
    border-style: dotted;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 20px;
  }
`;

export const StyledUploadIcon = styled(Icon)`
  &&& {
    margin-top: 10px;
    color: #FA7268;
  }
`;

export const StyledMessage = styled.div`
  &&& {
    font-size: 15px;
  }
`;


export const StyledSemanticToastContainer = styled(SemanticToastContainer)`
  &&& {
    margin-top: 10px !important;
  }
`;