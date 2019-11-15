import React, {Component} from 'react';
import {StyledTab, StyledTabPane} from "./styles";
import Text from "../Text/Text";
import DropzoneArea from "../Dropzone/Dropzone";

class Tab extends Component {

  render() {
    const panes = [
      {
        menuItem: 'Text', render: () =>
          <StyledTabPane>
            <Text/>
          </StyledTabPane>
      },
      {
        menuItem: 'Images/Files', render: () =>
          <StyledTabPane>
            <DropzoneArea></DropzoneArea>
          </StyledTabPane>
      },
    ];
    return (
      <StyledTab
        menu={{fluid: true, vertical: true}}
        menuPosition='left'
        panes={panes}
      />
    );
  }
}

export default Tab;