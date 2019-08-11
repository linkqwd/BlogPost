import React from "react";
import { Link } from "react-router-dom";
import { VIEW_POST } from "../../url-map";
import {
  PostsWrapper,
  PostsItem,
  ItemHeader,
  CreatorInfo,
  ButtonSeeMore,
  Date,
  Description
} from "./styles";

const LatestPosts = props => {
  const mapPostsList = (item, i) => {
    return (
      <PostsItem key={item.id + i}>
        <ItemHeader>
          <Link to={`${VIEW_POST}${item.id}`}>{item.title}</Link>
        </ItemHeader>
        <Date>Date: {item.date || "Unknown"}</Date>
        <CreatorInfo>Creator: {item.creator || "anonymous"}</CreatorInfo>
        <Description>{item.body}</Description>
        <ButtonSeeMore>
          <Link to={`${VIEW_POST}${item.id}`}>See more</Link>
        </ButtonSeeMore>
      </PostsItem>
    );
  };

  return <PostsWrapper>{props.postsList.map(mapPostsList)}</PostsWrapper>;
};

export default LatestPosts;
