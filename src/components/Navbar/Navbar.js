import React from 'react';
import {Menu} from 'semantic-ui-react';
import strings from "../../res/strings";
import {StyledDiv} from "./styles";

class Navbar extends React.Component {
  state = {
    activeItem: 'home'
  };

  handleItemClick = (event, {name}) => {
    this.setState({
      activeItem: name
    })
  };

  render() {
    const {activeItem} = this.state;
    return (
      <StyledDiv>
        <Menu
          fluid={false}
          text
          inverted
          size={"huge"}
          attached={"top"}>
          <Menu.Item
            href="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            position={"left"}>
            {strings.navBar.home}
          </Menu.Item>
          <Menu.Item
            href="/send"
            active={activeItem === 'send'}
            onClick={this.handleItemClick}
            position={"left"}>
            {strings.navBar.send}
          </Menu.Item>
          <Menu.Item
            href="/receive"
            active={activeItem === 'receive'}
            onClick={this.handleItemClick}
            position={"left"}>
            {strings.navBar.receive}
          </Menu.Item>
        </Menu>
      </StyledDiv>
    )
  }
}

export default Navbar;