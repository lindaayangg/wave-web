import React from 'react';
import strings from "../../res/strings";
import {StyledDiv, StyledMenu, StyledMenuItem} from "./styles";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
  state = {
    scrollTop: true,
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
    const {scrollTop} = this.state;
    return (
      <StyledDiv>
        <StyledMenu
          scrolltop={scrollTop}
          text
          fixed="top">
          <StyledMenuItem
            as={NavLink}
            to='/'
          >
            HOME
          </StyledMenuItem>
          <StyledMenuItem
            as={NavLink}
            to="/send"
          >
            {strings.navBar.send}
          </StyledMenuItem>
          <StyledMenuItem
            as={NavLink}
            to="/receive"
          >
            {strings.navBar.receive}
          </StyledMenuItem>
          <StyledMenuItem
            as={NavLink}
            to="/about"
          >
            {strings.navBar.about}
          </StyledMenuItem>
        </StyledMenu>
      </StyledDiv>
    )
  }
}

export default Navbar;