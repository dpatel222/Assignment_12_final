import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  background-color: black;
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "green")};
  }
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false, ...rest }) => {
  return (
    <StyledLabel disabled={disabled} {...rest}>
      {text}
    </StyledLabel>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Label;
