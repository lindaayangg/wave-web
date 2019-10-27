import styled from 'styled-components';
import {GridRow, Icon} from "semantic-ui-react";

export const StyledGridRow = styled(GridRow)`
  &&& {
    text-align: center;
  }
`;

export const StyledDropzoneDiv = styled.div`
  &&& {
    position: relative;
    width: 500px;
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
`