import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const StyledHeader = styled.header`
  color: #eee;
  padding: 20px;
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  border-bottom: 1px solid ${props => props.theme.darkPrimary};
  background-color: ${props => props.theme.primary};
  letter-spacing: 1px;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: #eee;
    text-transform: uppercase;
  }

  a.selected {
    border-bottom: 2px solid #fff;
  }
  button {
    text-align: center;
    text-transform: uppercase;
    padding-right: 60px;
    padding-left: 60px;
    color: #fff;
  }
  div.dropdown-menu-right{
    background-color: ${props => props.theme.primary};
  }
`;

class Header extends Component {
  state = {
    dropdownOpen: false
  };
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  render() {
    const { dropdownOpen } = this.state;
    return (
      <StyledHeader>
        <div>
          <NavLink
            to="/"
            style={{ fontFamily: "Prosto One", fontWeight: "bolder" }}
          >
            N.D.R.
          </NavLink>
        </div>
        <div className="d-flex">
          <NavLink activeClassName="selected" to="/search">
            Search
          </NavLink>
          &nbsp; &nbsp;
          <NavLink activeClassName="selected" to="/upload-thesis">
            Upload
          </NavLink>
          &nbsp; &nbsp;
          <Dropdown isOpen={dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              className="p-0"
              style={{
                backgroundColor: "transparent",
                border: 0,
                fontSize: 20
              }}
            >
              <i className="fa fa-graduation-cap m-0"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>1739479393739D</DropdownItem>
              <DropdownItem>Mukti Poudel</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem>My Theseus</DropdownItem>
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem>My Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-power-off mr-3"></i> Sign Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
