import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#0056b3")};
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
