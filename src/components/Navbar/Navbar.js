import React from 'react';
import strings from "../../res/strings";
import {StyledDiv, StyledMenu, StyledMenuItem} from "./styles";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

class Navbar extends React.Component {
  state = {
    activeItem: 'home',
    scrollTop: true,
  };

  handleItemClick = (event, {name}) => {
    const nameLowercase = name.toLowerCase();
    this.setState({
      activeItem: nameLowercase,
    })
  };

  handleScrollTop = () => {
    window.onscroll = () => {
      window.pageYOffset === 0
        ? this.setState({
          scrollTop: true,
        })
        : this.setState({
          scrollTop: false,
        })
    }
  };

  componentDidMount() {
    this.handleScrollTop();
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    console.log(this.state.activeItem);
    const {activeItem} = this.state;
    return (
      <StyledDiv>
        <StyledMenu
          scrollTop={this.state.scrollTop}
          text
          size="huge"
          fixed="top">
          <StyledMenuItem
            href="/"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name='heart' size="large"/>
          </StyledMenuItem>
          <StyledMenuItem
            href="/send"
            active={activeItem === 'send'}
            onClick={this.handleItemClick}
          >
            {strings.navBar.send}
          </StyledMenuItem>
          <StyledMenuItem
            href="/receive"
            active={activeItem === 'receive'}
            onClick={this.handleItemClick}
          >
            {strings.navBar.receive}
          </StyledMenuItem>
          <StyledMenuItem
            href="/about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          >
            {strings.navBar.about}
          </StyledMenuItem>
        </StyledMenu>
      </StyledDiv>
    )
  }
}

export default Navbar;