import styled from "styled-components";
import {Divider, Grid, GridColumn, GridRow, Header, Icon, List} from "semantic-ui-react";
import ListItem from "semantic-ui-react/dist/commonjs/elements/List/ListItem";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";

export const StyledDiv = styled.div`
  &&& {
    background-color: #141414;
    height: 67vh;
    color: white;
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

export const StyledListItem = styled(ListItem)`
  &&& {
    color: #fff !important;
    margin: 10px 0;
  }
`;

export const StyledDivider = styled(Divider)`
  &&& {
    color: #fff !important;
    width: 100%;
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
    color: #fff;
  }
`;

export const StyledCopyRight = styled.div`
  &&& {
    margin-top: 10px;
  }
`;