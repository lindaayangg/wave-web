import styled from "styled-components";
import {GridColumn, Header, Icon, Image} from "semantic-ui-react";

export const StyledLeftGrid = styled(GridColumn)`
  &&& {
    padding: 50px 100px !important;
    @media (max-width: 991px) {
      padding: 50px 50px 10px 50px !important; 
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
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

export const StyledReceiveImage = styled(Image)`
  &&& {
    margin-top: 50px;
    @media (max-width: 991px) {
      width: 500px;
    }
  }
`;

export const StyledReceiveIcon = styled(Icon)`
  &&& {
    color: #FA7268;
    font-size: 3rem !important;
  }
`;

export const StyledTitleWrapper = styled.div`
  &&& {
    display: flex;
  }
`;

export const StyledTitleText = styled(Header)`
  &&& {
    font-size: 35px;
    padding-left: 5px;
    text-align: center;
    color: #FA7268;
    margin-top: 0;
  }
`;

export const StyledReceiveWaveWrapper = styled.div`
  &&& { 
    width: 100%;
    margin-top: 50px;
    @media (min-width: 768px) and (max-width: 991px) {
      width: 70%;
      margin-top: 30px
    }
    @media (max-width: 767px) {
      width: 90%;
      margin-top: 30px
    }
  }
`;

