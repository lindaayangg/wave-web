import React, {Component} from 'react';
import {StyledTab, StyledTabPane} from "./styles";
import SendText from "../SendText/SendText";
import DropzoneArea from "../Dropzone/Dropzone";

class Tab extends Component {

  render() {
    const panes = [
      {
        menuItem: 'Text', render: () =>
          <StyledTabPane>
            <SendText/>
          </StyledTabPane>
      },
      {
        menuItem: 'Images/Files', render: () =>
          <StyledTabPane>
            <DropzoneArea/>
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