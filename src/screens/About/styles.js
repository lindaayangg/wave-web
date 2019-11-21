import styled from "styled-components";
import {Button, Grid, GridColumn, Header, Icon, Image} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

export const StyledAboutWrapper = styled.div`
  &&& {
    padding: 60px !important;
    text-align: center;
    width: 100%;
  }
`;

export const StyledTitleText = styled(Header)`
  &&& {
    color: #FA7268;
    font-size: 35px;
  }
`;

export const StyledSectionWrapper = styled.div`
  &&& {
    margin-top: 100px;
  }
`;

export const StyledSubTitleText = styled(HeaderSubHeader)`
  &&& {
    font-size: 18px;
    color: #676767;
  }
`;

export const StyledAboutTextWrapper = styled.div`
  &&& {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    color: #898989;
  }
`;

export const StyledAboutText = styled.p`
  &&& {
    width: 55%;
    line-height: 1.6rem;
  }
`;

export const StyledTeamWrapper = styled.div`
  &&& {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledMemberWrapper = styled(Grid)`
  &&& {
    width: 70%;
    @media (max-width: 1183px) {
      width: 100%;
    }
  }
`;

export const StyledMemberImage = styled(Image)`
  &&& {
    @media (max-width: 767px) {
      width: 50%;
    }
  }
`;

export const StyledMemberName = styled(Header)`
  &&& {
    font-size: 23px;
    margin-bottom: 8px;
  }
`;

export const StyledMemberTitle = styled(HeaderSubHeader)`
  &&& {
    font-size: 17px;
    color: #FA7268;
    font-weight: 600;
  }
`;

export const StyledMemberInfo = styled.p`
  &&& {
    margin-top: 20px;
    line-height: 1.8rem;
    font-size: 15px;
  }
`;

export const StyledMemberDetailRightWrapper = styled(GridColumn)`
  &&& {
    text-align: left;
    padding-left: 70px !important;
    @media (max-width: 767px) {
      padding-left: 10px !important;
      padding-right: 0 !important;
    }
  }
`;

export const StyledMemberDetailLeftWrapper = styled(GridColumn)`
  &&& {
    text-align: left;
    padding-right: 70px !important;
    @media (max-width: 767px) {
      padding-right: 0 !important;
    }
  }
`;

export const StyledSocialMediaButton = styled(Button)`
  &&& {
    background-color: #FA7268;
    color: #FFFFFF;
    margin-right: 10px;
    &:hover{
      background-color: #FA7268;
      color: #FFFFFF;
      box-shadow: 0 3px 3px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
    }
    &:focus{
      background-color: #FA7268;
      color: #FFFFFF;
    }
  }
`;

export const StyledCarouselWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
`;

export const StyledHackathonGrid = styled(Grid)`
  &&& {
    width: 75%;
  }
`;

export const StyledHackathonDescriptionWrapper = styled(GridColumn)`
  &&& {
    padding-left: 50px !important;
    text-align: left;
  }
`;

export const StyledArrows = styled(Icon)`
  &&& {
    color: #FA7268;
  }
`;

export const StyledHackathonTitle = styled(Header)`
  &&& {
    font-size: 20px;
    color: #FA7268;
  }
`;

export const StyledHackathonDescription = styled.p`
  &&& {
    margin-top: 20px;
    line-height: 1.8rem;
    font-size: 15px;
  }
`;

export const StyledHackthonCardWrapper = styled.div`
  &&& {
    padding: 10px 0;
  }
`;