import React from 'react';
import strings from "../../res/strings";
import {StyledLogoWrapper, StyledMenu, StyledMenuItem, StyledMenuItemsWrapper, StyledNavbarWrapper} from "./styles";
import {NavLink} from "react-router-dom";
import {Image} from "semantic-ui-react";
import wave_icon from '../../res/images/wave.png'

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
      <StyledNavbarWrapper>
        <StyledMenu
          scrolltop={scrollTop}
          text
          fixed="top">
          <StyledLogoWrapper>
            <Image
              as={NavLink}
              to='/'
              src={wave_icon}
              size='tiny'/>
          </StyledLogoWrapper>
          <StyledMenuItemsWrapper>
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
          </StyledMenuItemsWrapper>
        </StyledMenu>
      </StyledNavbarWrapper>
    )
  }
}

export default Navbar;