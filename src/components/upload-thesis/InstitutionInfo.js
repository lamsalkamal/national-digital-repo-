import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Input from "../../common/Input";
import PrimaryButton from "../../common/PrimaryButton";
import Button from "../../common/Button";

import {
  showNextForm,
  setInstitutionInfoInput
} from "../../store/actions/uploadThesisActions";
import DateInput from "../../common/DateInput";

class InstitutionInfo extends Component {
  // go to home screen on cancel
  handleCancelUpload = () => {
    this.props.history.push("/");
  };

  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setInstitutionInfoInput({
      [name]: value
    });
  };

  // handle study year start change
  handleStartYearChange = day => {
    this.props.setInstitutionInfoInput({
      startYear: day
    });
  };

  // handle study year end change
  handleEndYearChange = day => {
    this.props.setInstitutionInfoInput({
      endYear: day
    });
  };

  // handle defense date
  handleDefenseDate = day => {
    this.props.setInstitutionInfoInput({
      defenseDate: day
    });
  };

  // handle approval change
  handleApprovalChange = day => {
    this.props.setInstitutionInfoInput({
      approvalDate: day
    });
  };

  render() {
    const {
      universityName,
      campusName,
      location,
      authorName,
      coAuthorName,
      supervisorName,
      coSupervisorName
    } = this.props.uploadThesis.institutionInfo;

    return (
      <div className="container">
        <div className="pt-3">
          <Input
            label="Name of the university"
            name="universityName"
            value={universityName}
            onChange={this.handleInputChange}
          />
          <Input
            label="Name of the campus"
            name="campusName"
            value={campusName}
            onChange={this.handleInputChange}
          />
          <Input
            label="Location"
            name="location"
            value={location}
            onChange={this.handleInputChange}
          />
          <DateInput
            label="Start Year"
            name="startYear"
            onChange={this.handleStartYearChange}
          />

          <DateInput
            label="End Year"
            name="endYear"
            onChange={this.handleEndYearChange}
          />
          <Input
            label="Thesis Author"
            name="authorName"
            value={authorName}
            onChange={this.handleInputChange}
          />
          <Input
            label="Theis Co-Author"
            name="coAuthorName"
            value={coAuthorName}
            onChange={this.handleInputChange}
          />
          <DateInput label="Defense Date" onChange={this.handleDefenseDate} />

          <DateInput
            label="Approval Date"
            onChange={this.handleApprovalChange}
          />
          <Input
            label="Thesis Supervisor "
            name="supervisorName"
            value={supervisorName}
            onChange={this.handleInputChange}
          />
          <Input
            label="Thesis Co-SuperVisor"
            name="coSupervisorName"
            value={coSupervisorName}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="bg-danger text-light p-2 mb-2">
          The pre-filled data in the above fields are according to the
          information we recieved from your academic institutiion. Please
          contact your campus administration if you find any errors.
        </div>

        <div className="row pb-3">
          <div className="col-md-12">
            <div className="clearfix">
              <div className="float-left">
                <Button onClick={this.handleCancelUpload}>
                  <i className="fa fa-power-off"></i> &nbsp; Cancel
                </Button>
              </div>
              <div className="float-right">
                <PrimaryButton onClick={this.props.showNextForm}>
                  Agree / Next <i className="fa fa-angle-double-right"></i>
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
  showNextForm,
  setInstitutionInfoInput
};

InstitutionInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showNextForm: PropTypes.func.isRequired,
  setInstitutionInfoInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InstitutionInfo));
