import styled from "styled-components";

const ButtonSeeMore = styled.div`
  display: inline-block;
  & a {
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    padding: 5px 15px;
    background: #4b79a1;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #2d8fe3;
    }
  }
`;

export default ButtonSeeMore;
