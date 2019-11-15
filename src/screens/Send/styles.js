import styled from 'styled-components';
import {Grid, GridColumn, Header, Icon, Image} from "semantic-ui-react";

export const StyledWrapper = styled(Grid)`
  &&& {
    margin-top: 72px;
    margin-bottom: 0 !important;
    padding: 0 30px;
  }
`;

export const StyledLeftGrid = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    padding: 60px !important;
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
    width: 100wh !important;
  }
`;