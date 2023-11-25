import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CustomNavlink = styled(NavLink)`
  color: teal;
  text-decoration: none;
  &:focus,
  &:focus-within,
  &:hover {
    color: tomato !important;
  }
`;

export default CustomNavlink;
