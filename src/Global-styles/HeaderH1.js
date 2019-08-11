import styled from "styled-components";

const HeaderH1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;

  & a {
    text-decoration: none;
    color: #333;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #2d8fe3;
    }
    &:active {
      color: #2d8fe3;
    }
  }
`;

export default HeaderH1;
