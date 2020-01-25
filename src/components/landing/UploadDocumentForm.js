import React from "react";
//import InputFormField from "../../common/InputFormField";
//import PropTypes from "prop-types";
import PrimaryButton from "../../common/PrimaryButton";

const UploadDocumentForm = props => {
  return (
    <div className="search-document-form">
      <div className="upload-label">
        <label>
          <p>YOU MUST LOGIN TO UPLOAD YOUR THESIS</p>
        </label>
      </div>
      <div className="side-by-side">
        <input type="email" placeholder="USERNAME/EXAM REGISTRATION NUMBER" />
        <input type="Password" placeholder="PASSWORD" />
      </div>
      <PrimaryButton type="submit">LOGIN</PrimaryButton>
    </div>
  );
};

UploadDocumentForm.propTypes = {};

export default UploadDocumentForm;
