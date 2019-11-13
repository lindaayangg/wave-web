import styled from 'styled-components';
import {Button, Grid, GridColumn, Header, Icon, Image, Tab, TextArea} from "semantic-ui-react";

export const StyledTextArea = styled(TextArea)`
  &&& {
    border-color: #FA7268;
    &:focus {
      border-color: #002E54;
    }
  }
`;

export const StyledButtonsWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    color: #ffffff;
    background-color: #FA7268;
    width: 100px;
    margin: 10px 0px 0px 10px;
  }
`;

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

export const StyledTab = styled(Tab)`
  &&& {
    width: -webkit-fill-available;
  }
`;

export const StyledTabPane = styled(Tab.Pane)`
  &&& {
    height: 400px;
    padding: 20px;
    border-radius: 10px !important;
  }
`;

export const StyledSendImage = styled(Image)`
  &&& {
    width: 100wh !important;
  }
`;