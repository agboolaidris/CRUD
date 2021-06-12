import styled, { css } from "styled-components";

interface ButtonProps {
  buttonStyle?: "success" | "primary" | "warning";
  width?: string;
  height?: string;
  rounded?: string;
  active?: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;
  width: ${({ width }) => (width ? width : "150px")};
  height: ${({ height }) => (height ? height : "40px")};
  border-radius: ${({ rounded }) => (rounded ? rounded : "0")};
  transition: all 0.6s ease-in-out;
  background-color: #00adb5;
  color: white;

  &:disabled,
  &[disabled] {
    opacity: 0.2;
  }
`;
