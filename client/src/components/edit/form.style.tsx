import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  max-width: 90%;
  height: max-content;
  background-color: gray;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px;
  padding: 1em;
  h1 {
    color: white;
    font-size: 25px;
    text-align: center;
  }
  button {
    width: 100%;
    margin-top: 1em;
    &:hover {
      transform: scaleY(1.1);
    }
  }
`;
