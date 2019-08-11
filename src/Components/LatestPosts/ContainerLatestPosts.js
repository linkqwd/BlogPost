import React from "react";
import LatestPosts from "./LatestPosts";
import Page404 from "../Page404/Page404";
import { connect } from "react-redux";
import { fetchLatestPosts } from "../../redux-store/actions";

class ContainerLatestPosts extends React.Component {
  componentDidMount() {
    this.props.fetchLatestPosts();
  }

  render() {
    if (this.props.isError404) {
      return <Page404 message={this.props.isError404.message} />;
    } else {
      return <LatestPosts postsList={this.props.posts} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    isError404: state.isError404
  };
};

const mapActionsToProps = {
  fetchLatestPosts
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ContainerLatestPosts);
