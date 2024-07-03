import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface TextProps {
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledText = styled.h1<TextProps>`
  background-color: black;
  color: white;
 

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "blue")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const Text: React.FC<TextProps> = ({ disabled = false, children }) => {
  return (
    <StyledText disabled={disabled}>
      This is an h1 tag for the text component
    </StyledText>
  );
};

export default Text;
