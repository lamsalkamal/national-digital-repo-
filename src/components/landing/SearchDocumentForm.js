import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectList from "../../common/SelectList";
import { Button } from "@material-ui/core";
import { setSearchInput } from "../../store/actions/searchDocumentActions";

class SearchDocumentForm extends Component {
  handleChange = e => {
    const data = { name: e.target.name, value: e.target.value };
    this.props.setSearchInput(data);
  };

  handleSearchDocuments = e => {
    alert("handle search document");
  };

  render() {
    const {
      universities,
      campuses,
      subjects
    } = this.props.searchDocument.options;
    const { university, campus, subject } = this.props.searchDocument.value;

    return (
      <div className="search-document-form">
        <div>
          <input
            type="text"
            placeholder="Search with title, keyword, author's name"
          />
        </div>
        <div>
          <SelectList
            name="university"
            value={university}
            options={universities}
            defaultOptionValue="Select University"
            onChange={this.handleChange}
          />
          <SelectList
            name="campus"
            value={campus}
            options={campuses}
            defaultOptionValue="Select Campus"
            onChange={this.handleChange}
          />
          <SelectList
            name="subject"
            value={subject}
            options={subjects}
            defaultOptionValue="Select Subject"
            onChange={this.handleChange}
          />
        </div>
        <div className="advanced-search">
          <input type="checkbox" />
          <label>
            <p>Advanced Search</p>
          </label>
        </div>
        <Button fullWidth variant="contained" onClick={this.handleSearchDocuments}>
          <i className="fa fa-search mr-3 my-3"></i>Search
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchDocument: state.searchDocument
});

const mapDispatchToProps = {
  setSearchInput
};

SearchDocumentForm.propTypes = {
  searchDocument: PropTypes.object.isRequired,
  setSearchInput: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDocumentForm);
