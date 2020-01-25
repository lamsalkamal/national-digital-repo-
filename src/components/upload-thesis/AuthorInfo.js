import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../../common/Input";
import Button from "../../common/Button";
import PrimaryButton from "../../common/PrimaryButton";
import {
  showPrevForm,
  showNextForm,
  setAuthorInfoInput
} from "../../store/actions/uploadThesisActions";
import * as SC from "styled-components";

class AuthorInfo extends Component {
  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setAuthorInfoInput({
      [name]: value
    });
  };

  render() {
    const {
      firstName,
      middleName,
      lastName,
      address,
      email,
      mobile
    } = this.props.uploadThesis.authorInfo;

    return (
      <div className="container">
        <div className="pt-3">
          <Input
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={this.handleInputChange}
          />
          <Input
            label="Middle Name"
            name="middleName"
            value={middleName}
            onChange={this.handleInputChange}
          />
          <Input
            label="Last name"
            name="lastName"
            value={lastName}
            onChange={this.handleInputChange}
          />
          <Input
            label="Permanent Address"
            name="address"
            value={address}
            onChange={this.handleInputChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <Input
            label="Mobile"
            type="tel"
            name="mobile"
            value={mobile}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="d-flex mt-2">
          <input id="agreement" type="checkbox" name="agreement" /> &nbsp;
          <label htmlFor="agreement">
            I wish to receive the updates and information about the
            oppertunities in future in this email.
          </label>
        </div>

        <div className="row pb-3">
          <div className="col-md-12">
            <div className="clearfix">
              <div className="float-left">
                <Button onClick={this.props.showPrevForm}>
                  <i className="fa fa-angle-double-left"></i> &nbsp;Back
                </Button>
              </div>
              <div className="float-right">
                <PrimaryButton onClick={this.props.showNextForm}>
                  Next <i className="fa fa-angle-double-right"></i>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  uploadThesis: state.uploadThesis
});

const mapDispatchToProps = {
  showPrevForm,
  showNextForm,
  setAuthorInfoInput
};

AuthorInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showPrevForm: PropTypes.func.isRequired,
  showNextForm: PropTypes.func.isRequired,
  setAuthorInfoInput: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorInfo);
