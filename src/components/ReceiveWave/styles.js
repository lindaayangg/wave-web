import styled from "styled-components";
import {Button, Icon, Image, Message, MessageContent, MessageHeader} from "semantic-ui-react";

export const StyledReceiveButton = styled(Button)`
  &&& {
    color: #ffffff;
    background-color: #FA7268;
    width: 200px;
    height: 200px;
    line-height: 1.5rem;
    &:hover {
      box-shadow: 0 3px 3px 3px rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
      color: #ffffff;
      background-color: #FA7268;
    }
  }
`;

export const StyledCancelButton = styled(Button)`
  &&& {
    color: #ffffff;
    background-color: #FA7268;
    margin-top: 30px;
    &:focus {
      background-color: #FA7268;
      color: #ffffff;
    }
    &:hover {
      background-color: #FA7268;
      color: #ffffff;
      box-shadow: 0 3px 3px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
    }
  }
`;

export const StyledListenWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledReceivedMessagesDisplay = styled(Message)`
  &&& {
    border-radius: 10px;
    width: 40vw;
    margin-top: 40px;
    padding: 25px !important;
  }
`;

export const StyledReceivedMessagesWrapper = styled.div`
  &&& {
    margin: 15px 0 0 0;
  }
`;

export const StyledReceivedImageWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledMessageHeader = styled(MessageHeader)`
  &&& {
    color: #FA7268;
  }
`;

export const StyledMessageIcon = styled(Icon)`
  &&& {
    margin-right: 10px;
    color: #FA7268;
  }
`;

export const StyledCopyButton = styled(Button)`
  &&& {
    margin-right: 10px;
    &:hover {
      box-shadow: 0 1px 1px 0 rgba(0,0,0,.24), 0 0 2px 0 rgba(0,0,0,.12);
    }
    &:focus {
      background-color: #E0E1E2 none;
      color: rgba(0,0,0,.6);
    }
  }
`;

export const StyledReceivedMessage = styled(MessageContent)`
  &&& {
    word-break: break-all;  
  }
`;