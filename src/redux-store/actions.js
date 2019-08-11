import { fetchWrapper } from "../api/api";
import {
  FETCH_LATEST_POSTS,
  FETCH_SINGLE_POSTS,
  VIEW_COMMENTS_POST
} from "../url-map";
import {
  GET_LATEST_POSTS_ACTION,
  GET_POST_ACTION,
  GET_POST_ACTION_FAILED,
  UPDATE_COMMENT_FIELD
} from "./redux-constants";

const dispatcherObject = (type, payload) => ({
  type: type,
  payload: payload
});

export const fetchLatestPosts = () => async dispatch => {
  try {
    const posts = await fetchWrapper(FETCH_LATEST_POSTS);
    dispatch(dispatcherObject(GET_LATEST_POSTS_ACTION, posts));
  } catch (err) {
    dispatch(dispatcherObject(GET_POST_ACTION_FAILED, err));
  }
};

export const fetchPost = postId => async dispatch => {
  try {
    const posts = await fetchWrapper(
      `${FETCH_SINGLE_POSTS}${postId}${VIEW_COMMENTS_POST}`
    );
    dispatch(dispatcherObject(GET_POST_ACTION, posts));
  } catch (err) {
    dispatch(dispatcherObject(GET_POST_ACTION_FAILED, err));
  }
};

export const updateCommentFieldUnderPost = val => {
  return {
    type: UPDATE_COMMENT_FIELD,
    payload: val
  };
};
