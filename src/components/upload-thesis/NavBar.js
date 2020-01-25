import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { showSelectedUploadForm } from "../../store/actions/uploadThesisActions";
import {
  IoIosHome,
  IoIosPerson,
  IoIosInformationCircleOutline,
  IoIosCloudUpload,
  IoIosCheckmarkCircleOutline
} from "react-icons/io";
import MaxWidthContent from "../../common/MaxWidthContent";

const navItems = [
  {
    title: "Institution",
    icon: <IoIosHome />
  },
  {
    title: "Authors",
    icon: <IoIosPerson />
  },
  {
    title: "Thesis Info",
    icon: <IoIosInformationCircleOutline />
  },
  {
    title: "Upload",
    icon: <IoIosCloudUpload />
  },
  {
    title: "Review",
    icon: <IoIosCheckmarkCircleOutline />
  }
];

const StyledContainer = styled.div`
  width: 100%;
  background-color: #eee;
  transition: all 0.3s ease-in;
  border-left: 1px solid #ddd;
  display: flex;
  justify-content: flex-start;
`;

const StyledItem = styled.div`
  width: 100%;
  text-align: center;
  border-right: 1px solid #d3d3d3;
  padding: 10px;
  color: ${props => (props.active ? "#333" : props.theme.primary)};
  background-color: ${props => (props.active ? "#fff" : "#F1F4F2")};
  transition: all 0.2s ease-in;
  
  p {
    padding: 0;
    margin: 0;
    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

class NavBar extends Component {
  handleShowForm = index => {
    const id = index + 1;
    this.props.showSelectedUploadForm(id);
  };

  render() {
    const { showForm } = this.props.uploadThesis;

    return (
      <div className="container">
        <MaxWidthContent>
          <StyledContainer>
            {navItems.map((item, i) => (
              <StyledItem
                key={`nav-item-${i}`}
                active={showForm === i + 1}
                onClick={() => this.handleShowForm(i)}
              >
                {item.icon}
                <p>{item.title}</p>
              </StyledItem>
            ))}
          </StyledContainer>
        </MaxWidthContent>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadThesis: state.uploadThesis
});

const mapDispatchToProps = {
  showSelectedUploadForm
};

NavBar.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showSelectedUploadForm: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
