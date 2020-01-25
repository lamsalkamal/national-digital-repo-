import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../styles/thesis.css";
import Input from "../../common/Input";
import Button from "../../common/Button";
import PrimaryButton from "../../common/PrimaryButton";
import {
  showPrevForm,
  showNextForm,
  setThesisInfoInput
} from "../../store/actions/uploadThesisActions";

class ThesisInfo extends Component {
  // save changes to store
  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.props.setThesisInfoInput({
      [name]: value
    });
  };

  render() {
    const {
      title,
      abstract,
      reference,
      keyword1,
      keyword2,
      keyword3,
      keyword4,
      keyword5,
      keyword6,
      fund
    } = this.props.uploadThesis.thesisInfo;

    return (
      <div className="container">
        <div className="pt-3">
          <Input
            label="Thesis Title"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
          <Input
            label="Thesis Abstract"
            name="abstract"
            value={abstract}
            onChange={this.handleInputChange}
          />
          <Input
            label="Thesis Refrence"
            name="reference"
            value={reference}
            onChange={this.handleInputChange}
          />
          <Input
            label="Keywords"
            name="keyword1"
            value={keyword1}
            onChange={this.handleInputChange}
          />
          <Input
            name="keyword2"
            value={keyword2}
            onChange={this.handleInputChange}
          />
          <Input
            name="keyword3"
            value={keyword3}
            onChange={this.handleInputChange}
          />

          <Input
            name="keyword4"
            value={keyword4}
            onChange={this.handleInputChange}
          />
          <Input
            name="keyword5"
            value={keyword5}
            onChange={this.handleInputChange}
          />
          <Input
            name="keyword6"
            value={keyword6}
            onChange={this.handleInputChange}
          />

          <Input
            label="Any source of funding you received while writing this thesis ?"
            name="fund"
            value={fund}
            type="textfield"
            onChange={this.handleInputChange}
          />
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
  setThesisInfoInput
};

ThesisInfo.propTypes = {
  uploadThesis: PropTypes.object.isRequired,
  showPrevForm: PropTypes.func.isRequired,
  showNextForm: PropTypes.func.isRequired,
  setThesisInfoInput: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ThesisInfo);
