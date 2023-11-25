import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";

export default styled(Button)`
  background-color: teal;
  color: white;
  display: block;
  &:hover {
    background-color: black;
    color: white;
  }

  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: tomato;
      color: white;
      display: block;
      &:hover {
        background-color: black;
        color: white;
      }
    `}
`;
