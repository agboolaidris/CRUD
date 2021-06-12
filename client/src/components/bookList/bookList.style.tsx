import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin-top: 2em;
  border-spacing: 0px;

  tHead {
    width: 100%;
    background-color: grey;
    th {
      padding: 1em 0;
      color: white;
    }
  }
  tbody {
    width: 100%;
    tr {
      text-align: center;
      td {
        padding: 0.5em 0;
      }

      &:nth-child(even) {
        background-color: #d6e4f0;
      }
    }
  }
`;
