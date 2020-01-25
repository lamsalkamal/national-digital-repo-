import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "../../common/Button";
import PrimaryButton from "../../common/PrimaryButton";
import "../../styles/upload.css";

import {
  showPrevForm,
  confirmThesisUpload,
  setUploadInfoInput
} from "../../store/actions/uploadThesisActions";

class UploadInfo extends Component {
  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setUploadInfoInput({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Documents Upload</h2>

        <div className="row">
          <div className="col-md-6 mt-3">
            <input type="file" multiple />
          </div>
          <div className="col-md-6 mt-3">
            <button className="btn btn-warning"> Remove</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <input type="file" multiple />
          </div>
          <div className="col-md-6 mt-3">
            <button className="btn btn-warning"> Remove</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <input type="file" multiple />
          </div>
          <div className="col-md-6 mt-3">
            <button className="btn btn-warning"> Remove</button>
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex">
            <input type="checkbox" name="agreement" /> &nbsp;
            <label>
              I hearby confirm all the given information is correct.
            </label>
          </div>

          <div>
            <input type="checkbox" name="agreement" /> &nbsp;
            <label>I agree thesis portal's terms and condition.</label>
          </div>
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
                <PrimaryButton onClick={this.props.confirmThesisUpload}>
                  Confirm Upload <i className="fa fa-angle-double-right"></i>
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
  setUploadInfoInput,
  confirmThesisUpload
};

UploadInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showPrevForm: PropTypes.func.isRequired,
  confirmThesisUpload: PropTypes.func.isRequired,
  setUploadInfoInput: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadInfo);
