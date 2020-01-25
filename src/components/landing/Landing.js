import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../styles/landing.css";
import classNames from "classnames";
import SearchDocumentForm from "./SearchDocumentForm";
import UploadDocumentForm from "./UploadDocumentForm";
import { IoIosCloudUpload, IoIosSearch } from "react-icons/io";

class Landing extends Component {
  state = {
    showSearchDocument: true,
    showUploadDocument: false,
  };

  handleShowSearchDocument = () => {
    this.setState({
      showSearchDocument: true,
      showUploadDocument: false,
    });
  };

  handleShowUploadDocument = () => {
    this.setState({
      showSearchDocument: false,
      showUploadDocument: true,
    });
  };

  render() {
    const { showSearchDocument, showUploadDocument } = this.state;

    return (
      <div>
        <div className="landing">
          <div className="container text-center">
            <h1>National Digital Repository</h1>
            <div className="landing-buttons">
              <button
                className={classNames({ "active-button": showSearchDocument })}
                onClick={() => this.handleShowSearchDocument()}
              >
                <span>
                  <IoIosSearch />
                  Search Document
                </span>
              </button>
              <button
                className={classNames({ "active-button": showUploadDocument })}
                onClick={() => this.handleShowUploadDocument()}
              >
                <span>
                  <IoIosCloudUpload />
                  Upload Document
                </span>
              </button>
            </div>
            {showSearchDocument ? <SearchDocumentForm /> : null}
            {showUploadDocument ? <UploadDocumentForm /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  landing: state.landing,
});

const mapDispatchToProps = {};

Landing.propTypes = {
  landing: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
