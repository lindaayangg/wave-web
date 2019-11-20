import styled from "styled-components";
import {Divider, GridColumn, GridRow, Header, Image, List, ListContent} from "semantic-ui-react";
import ListItem from "semantic-ui-react/dist/commonjs/elements/List/ListItem";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

export const StyledFooterWrapper = styled.div`
  &&& {
    background-color: #141414;
    color: #A8A8A8;
    padding: 70px;
  }
`;

export const StyledContainerGridColumn = styled(GridColumn)`
  &&& {
    padding: 20px;
  }
`;

export const StyledInfoGridRow = styled(GridColumn)`
  &&& {
    margin-top: 50px;
    margin-bottom: 10px;
  }
`;

export const StyledHeader = styled(Header)`
  &&& {
    color: #FA7268;
    font-weight: 200;
  }
`;

export const StyledListWrapper = styled(List)`
  &&& {
    display: flex;
    flex-direction: column;
    line-height: 2.5rem;
  }
`;

export const StyledListItem = styled(ListItem)`
  &&& {
    color: #A8A8A8 !important;
    &:hover{
      color: #FFFFFF !important;
      cursor: pointer;
    }
  }
`;

export const StyledListItemContact = styled(ListItem)`
  &&& {
    color: #A8A8A8 !important;
    margin: 12px 0 0 0;
  }
`;

export const StyledEmailContent = styled(ListContent)`
  &&& {
    color: #A8A8A8 !important;
    &:hover {
      color: #FFFFFF !important;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  &&& {
    color: #FFFFFF !important;
    width: 100%;
    margin-top: 40px;
  }
`;

export const StyledSocialMediaContainer = styled(GridRow)`
  &&& {
    margin-top: 20px;
    text-align: center;
  }
`;

export const StyledSocialMediaButton = styled(Button)`
  &&& {
    margin: 10px;
    background-color: #FA7268;
    color: #FFFFFF;
    &:hover {
      background-color: #FCA099;
      color: #404040;
    }
    &:focus{
      background-color: #FA7268;
      color: #FFFFFF;
    }
  }
`;

export const StyledCopyRight = styled.div`
  &&& {
    margin-top: 15px;
  }
`;

export const StyledAppStoreBadgeWrapper = styled.div`
  &&& {
    margin-left: -10px;
  }
`;

export const StyledAppleStoreBadge = styled(Image)`
  &&& {
    padding: 0 10px 0 10px;
  }
`;

export const StyledGooglePlayBadge = styled(Image)`
  &&& {
    padding-right: 10px;
  }
`;
