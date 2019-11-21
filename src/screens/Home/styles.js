import styled from "styled-components";
import {Grid, GridColumn, Header, Image} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

export const StyledGridWrapper = styled(Grid)`
  &&& {
    height: 100vh;
    margin-bottom: 0 !important;
  }
`;

export const StyledGridLeftColumn = styled(GridColumn)`
  &&& {
    padding: 50px 80px 20px 80px !important;
    @media (max-width: 767px) {
      padding: 50px 40px 20px 40px !important;
    }
  }
`;

export const StyledGridRightColumn = styled(GridColumn)`
  &&& {
    padding: 50px 80px 20px 80px !important;
    @media (max-width: 767px) {
      padding: 50px 40px 20px 40px !important;
    }
  }
`;

export const StyledTitleText = styled(Header)`
  &&& {
    color: #FA7268;
    font-size: 50px;
  }
`;

export const StyledSubTitleText = styled(HeaderSubHeader)`
  &&& {
    font-size: 15px;
  }
`;

export const StyledLandingImage = styled(Image)`
  &&& {
    height: 100% !important;
  }
`;

export const StyledAppStoreBadgeWrapper = styled.div`
  &&& {
    margin: 10px 0 0 -10px;
  }
`;