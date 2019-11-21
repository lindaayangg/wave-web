import styled from "styled-components";
import {GridColumn, Header, Icon, Image} from "semantic-ui-react";

export const StyledLeftGrid = styled(GridColumn)`
  &&& {
    padding: 60px 100px !important;
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

export const StyledReceiveImage = styled(Image)`
  &&& {
    margin-top: 50px;
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
    padding-left: 20px;
    text-align: center;
    color: #FA7268;
    margin-top: 0;
  }
`;

export const StyledReceiveWaveWrapper = styled.div`
  &&& { 
    width: 50vw;
    margin-top: 50px;
  }
`;

