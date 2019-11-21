import React, {Component} from 'react';
import {StyledTab, StyledTabPane} from "./styles";
import SendText from "../SendText/SendText";
import DropzoneArea from "../Dropzone/Dropzone";

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  render() {
    const {width} = this.state;
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
      (width < 992)
        ? <StyledTab
          menu={{secondary: true}}
          panes={panes}
        />
        : <StyledTab
      menu={{fluid: true, vertical: true}}
      menuPosition='left'
      panes={panes}
    />
    );
  }
}

export default Tab;