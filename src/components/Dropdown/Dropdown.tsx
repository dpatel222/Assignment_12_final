import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select<DropdownProps>`
  background-color: black;
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "green")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ disabled = false }) => {
  return (
    <StyledDropdown disabled={disabled}>
      <option value="volvo">Volvo</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  disabled: PropTypes.bool,
};

export default Dropdown;
