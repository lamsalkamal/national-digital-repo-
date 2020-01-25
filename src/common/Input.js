import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-gap: 1px;
  width: 100% !important;

  label {
    text-transform: uppercase;
  }

  input {
    border: 0;
    border-bottom: 1px solid #d3d3d3;
    background: transparent;
    transition: border-bottom 0.3s ease-in;

    &:focus {
      outline: 0;
      border-bottom: 1px solid #333;
    }
  }
`;

const Input = ({ label, type, name, value, onChange }) => (
  <StyledContainer>
    <label>{label}</label>
    <input onChange={onChange} type={type} name={name} value={value} />
  </StyledContainer>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string
};

Input.defaultProps = {
  type: "string"
};

export default Input;
