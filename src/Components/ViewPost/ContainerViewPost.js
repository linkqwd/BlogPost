import React from "react";
import ViewPost from "./ViewPost";
import NewComment from "./NewComment";
import Page404 from "../Page404/Page404";
import { fetchPostWrapper } from "../../api/api";
import { POST_NEW_COMMENT } from "../../url-map";
import { connect } from "react-redux";
import {
  fetchPost,
  updateCommentFieldUnderPost
} from "../../redux-store/actions";

class ContainerViewPost extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postid);
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.props.newCommentField) return null;

    const post = {
      postId: +this.props.match.params.postid,
      body: this.props.newCommentField
    };

    fetchPostWrapper(POST_NEW_COMMENT, post).then(() => {
      this.props.updateCommentFieldUnderPost("");
      this.props.fetchPost(this.props.match.params.postid);
    });
  };

  render() {
    if (this.props.isError404) {
      return <Page404 message={this.props.isError404.message} />;
    } else {
      return (
        <>
          <ViewPost postView={this.props.postView} />
          <NewComment
            onChange={this.props.updateCommentFieldUnderPost}
            onSubmit={this.handleSubmit}
            value={this.props.newCommentField}
          />
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    postView: state.postView,
    isError404: state.isError404,
    newCommentField: state.newCommentField
  };
};

const mapActionsToProps = {
  fetchPost,
  updateCommentFieldUnderPost
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ContainerViewPost);
