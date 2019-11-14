import styled from 'styled-components';
import {Button, GridRow} from "semantic-ui-react";
import {Icon} from "semantic-ui-react";

export const StyledRemoveButton = styled(Button)`
  &&& {
    transition: .5s ease;
    position: absolute;
    opacity: 0;
    top: -5px;
    right: -5px;
    z-index: 5;
  }
`;

export const StyledSmallPreviewImg = styled.img`
  &&& {
    height: 100px;
    width: initial;
    max-width: 100%;
    margin-top: 5px;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.87);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
    border-radius: 2px;
    z-index: 5;
    opacity: 1;
  }
`;

export const StyledFileIcon = styled(Icon)`
  &&& {
    height: 100px;
    width: initial;
    max-width: 100%;
    margin-top: 5px;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.87);
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px;
    border-radius: 2px;
    z-index: 5;
    opacity: 1;
  }
`;

export const StyledImageContainer = styled(GridRow)`
  &&& {
    position: relative;
    z-index: 10;
    text-align: center;
    width: fit-content;
    display: flex;
    flex-direction: column;
    &:hover ${StyledSmallPreviewImg} {
      opacity: 0.3;
    };
    &:hover ${StyledRemoveButton} {
      opacity: 1;
    };
  }
`;

export const StyledContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;