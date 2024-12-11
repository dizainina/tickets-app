import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 10px 15px;
  width: "auto";
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const Button = ({
  disabled,
  onClick,
  children,
  className,
  // testId,
}) => (
  <ButtonStyle
    // data-testid={testId}
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </ButtonStyle>
);
