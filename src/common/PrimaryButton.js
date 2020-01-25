import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.primary};
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  cursor: pointer;
  transition: all 0.3s ease-in;
  padding: 10px;
  border-radius: 0.125rem;
  text-transform: uppercase;
  width: 100%;
  margin-top: 5px;

  &:hover {
    background-color: ${props => props.theme.darkPrimary};
  }

  div {
    svg {
      transform: scale(2);
    }
  }
`;

// using div inside button use grid
const PrimaryButton = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>
    <div>{children}</div>
  </StyledButton>
);

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default PrimaryButton;
