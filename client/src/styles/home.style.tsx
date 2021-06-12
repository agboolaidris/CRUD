import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  background-color: gray;
  width: 100%;
  padding: 1em;
  button {
    margin-left: 1em;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
