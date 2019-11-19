import styled from 'styled-components';
import {GridColumn, Header, Icon, Image} from "semantic-ui-react";

export const StyledLeftGrid = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    padding: 60px !important;
  }
`;

export const StyledTabWrapper = styled.div`
  &&& {
    width: 43vw;
  }
`;

export const StyledRightGrid = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    padding: 20px 100px 20px 20px !important;
  }
`;

export const StyledSendIcon = styled(Icon)`
  &&& {
    color: #FA7268;
  }
`;

export const StyledTitleText = styled(Header)`
  &&& {
    font-size: 35px;
    padding: 0 50px 0px 50px;
    text-align: center;
    color: #FA7268;
  }
`;

export const StyledSendImage = styled(Image)`
  &&& {
    width: 100vw !important;
  }
`;