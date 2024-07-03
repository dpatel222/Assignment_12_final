import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";


const StyledLabel = styled.label<RadioButtonProps>`
  display: inline-flex;
  align-items: center;

  color: black;

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${(props) => (props.disabled ? "grey" : "green")};
  }
`;

const RadioButtonInput = styled.input<RadioButtonProps>`
  margin-right: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ disabled = false }) => {
  return (
    <StyledLabel disabled={disabled}>
      <RadioButtonInput type="radio" disabled={disabled} />
      Radio Button
    </StyledLabel>
  );
};

RadioButton.propTypes = {
  disabled: PropTypes.bool,
};

export default RadioButton;
