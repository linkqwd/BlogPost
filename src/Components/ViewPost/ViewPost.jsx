import React from "react";
import {
  ViewPostWrapper,
  ViewPostHeader,
  PostText,
  CommentItem
} from "./stylesViewPost";

const LatestPosts = props => {
  if (!props.postView) return null;

  const { title, body, comments } = props.postView;

  const mapComments = (comment, i) => {
    return (
      <CommentItem key={i}>
        <span>Comment: </span>
        {comment.body || comment.comment}
      </CommentItem>
    );
  };

  return (
    <ViewPostWrapper>
      <ViewPostHeader>
        <h2>{title}</h2>
      </ViewPostHeader>
      <PostText>{body}</PostText>
      {comments ? comments.map(mapComments) : null}
    </ViewPostWrapper>
  );
};

export default LatestPosts;
