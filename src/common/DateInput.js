import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const StyledDateInputWrapper = styled.div`
  display: grid;

  p {
    margin: 2px;
    text-transform: uppercase;
  }

  input {
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
    width: 100%;
    background: transparent;
    transition: all 0.2s ease-in;

    &:focus {
      outline: none;
      border-bottom: 1px solid #474747;
    }
  }
`;

// use day picker component to get the selected day
const DateInput = ({ label, onChange }) => (
  <StyledDateInputWrapper>
    <p>{label} </p>
    <DayPickerInput onDayChange={onChange} />
  </StyledDateInputWrapper>
);

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DateInput;
