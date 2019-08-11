import {
  GET_LATEST_POSTS_ACTION,
  GET_POST_ACTION,
  GET_POST_ACTION_FAILED,
  UPDATE_COMMENT_FIELD
} from "./redux-constants";

const initialState = {
  posts: [],
  postView: null,
  isError404: false,
  newCommentField: ""
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LATEST_POSTS_ACTION:
      return { ...state, posts: action.payload };
    case GET_POST_ACTION:
      return { ...state, postView: action.payload };
    case GET_POST_ACTION_FAILED:
      return { ...state, isError404: action.payload };
    case UPDATE_COMMENT_FIELD:
      return { ...state, newCommentField: action.payload };

    default:
      return state;
  }
};
