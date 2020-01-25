import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import InstitutionInfo from "./InstitutionInfo";
import AuthorInfo from "./AuthorInfo";
import ThesisInfo from "./ThesisInfo";
import UploadInfo from "./UploadInfo";
import styled from "styled-components";

const StyledComponentTitle = styled.h1`
  background-color: ${props => props.theme.primary};
  text-align: center;
  color: #eee;
  padding: 15px 0;
  margin-top: 0px;
  margin-bottom: 0;
  box-shadow: inset 0 10px 9px -7px rgba(0, 0, 0, 0.5);
  font-weight: 400;
`;

const StyledNavBarWrapper = styled.div`
  background-color: #f1f4f2;
`;

const StyledFormWrapper = styled.div`
  background-color: #f1f4f2;
  min-height: 70vh;
  // min height should be calculated as calc(100vh - header - navbar)
`;

class UploadThesis extends Component {
  render() {
    const { showForm } = this.props.uploadThesis;
    let form = null;

    switch (showForm) {
      case 1:
        form = <InstitutionInfo />;
        break;
      case 2:
        form = <AuthorInfo />;
        break;
      case 3:
        form = <ThesisInfo />;
        break;
      case 4:
        form = <UploadInfo />;
        break;
      default:
      // no forms
    }
    return (
      <div>
        <StyledComponentTitle>UPLOAD YOUR THESIS</StyledComponentTitle>
        <StyledNavBarWrapper>
          <NavBar />
        </StyledNavBarWrapper>
        <StyledFormWrapper>{form}</StyledFormWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadThesis: state.uploadThesis
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadThesis);
