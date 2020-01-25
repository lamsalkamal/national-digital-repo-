import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const MaxWidthContent = props => (
  <StyledContainer>{props.children}</StyledContainer>
);

MaxWidthContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default MaxWidthContent;
