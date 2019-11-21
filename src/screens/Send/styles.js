import styled from 'styled-components';
import {GridColumn, Header, Icon, Image} from "semantic-ui-react";

export const StyledLeftGrid = styled(GridColumn)`
  &&& {
    padding: 50px 100px !important;
    @media (max-width: 991px) {
      padding: 50px 50px !important; 
    }
  }
`;

export const StyledTabWrapper = styled.div`
  &&& {
    width: 50vw;
    margin-top: 50px;
    @media (max-width: 991px) {
      width: 100%;
      margin-top: 30px
    }
  }
`;

export const StyledRightGrid = styled(GridColumn)`
  &&& {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    padding: 20px 100px 20px 20px !important;
    @media (max-width: 991px) {
      padding: 10px 100px 10px 100px !important;
    }
  }
`;

export const StyledSendIcon = styled(Icon)`
  &&& {
    color: #FA7268;
    font-size: 3rem !important;
  }
`;

export const StyledTitleText = styled(Header)`
  &&& {
    font-size: 35px;
    padding-left: 20px;
    text-align: center;
    color: #FA7268;
    margin-top: 0;
  }
`;

export const StyledTitleWrapper = styled.div`
  &&& {
    display: flex;
  }
`;

export const StyledSendImage = styled(Image)`
  &&& {
    margin-top: 50px;
    @media (max-width: 991px) {
      width: 500px;
    }
  }
`;