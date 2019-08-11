import styled from "styled-components";

const CommentItem = styled.p`
  background: #f7f7f7;
  padding: 10px;
  border-radius: 3px;

  & span {
    font-style: italic;
    font-size: 14px;
    display: block;
    margin-bottom: 6px;
  }

  & + & {
    margin-top: 15px;
  }
`;

export default CommentItem;
