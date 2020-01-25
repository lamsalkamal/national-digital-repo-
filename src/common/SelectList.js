import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  width: 100%;

  label {
    padding-left: 0.75rem;
  }

  select {
    height: 2rem;
    padding: 0.375rem 0.75rem;
    color: #1b1b1b;
    font-size: 0.875rem;
    border: 0.0625rem solid #98a2ae;
    border-radius: 0.125rem;
    outline: none;
    margin-top: 2px;
    width: 100%;

    option {
      font-weight: normal;
      display: block;
      white-space: pre;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
`;

const SelectList = ({ name, value, options, defaultOptionValue, onChange }) => {
  let defaultOption = null;

  // create option if defaultOption is available
  if (defaultOptionValue) {
    defaultOption = (
      <option key={0} value="">
        {defaultOptionValue}
      </option>
    );
  }

  const selectOptions = [
    defaultOption && defaultOption,
    ...options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))
  ];

  return (
    <StyledContainer>
      <select name={name} value={value} onChange={onChange}>
        {selectOptions}
      </select>
    </StyledContainer>
  );
};

SelectList.propTypes = {
  defaultOptionValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectList;
