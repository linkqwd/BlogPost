import styled from "styled-components";

const ItemHeader = styled.h2`
  font-weight: 500;
  margin-bottom: 10px;

  & a {
    color: #333;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #2d8fe3;
    }
  }
`;

export default ItemHeader;
