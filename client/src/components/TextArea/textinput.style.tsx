import styled, { css } from "styled-components";
interface InputProps {
  width?: string;
  active?: boolean;
}

export const TextAreaContainer = styled.div<InputProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 0.3s ease-in-out;
  margin-top: 1em;
  ${({ active }) =>
    active &&
    css`
      border: 2px solid red;

      textarea::placeholder {
        color: red;
      }
    `}
  &:focus-within {
    border: 2px solid #00adb5;
    transform: scaleY(1.1);
  }
  textarea {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 2px;
    background-color: transparent;
  }
  svg {
    margin: 0 0.5em;
    color: #00adb5;
  }
`;
