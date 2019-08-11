import React from "react";
import ContainerLatestPosts from "./LatestPosts/ContainerLatestPosts";
import ContainerViewPost from "./ViewPost/ContainerViewPost";
import Page404 from "./Page404/Page404";
import HeaderH1 from "../Global-styles/HeaderH1";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { LATEST_POSTS, VIEW_POST_PARAM } from "../url-map";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HeaderH1>
        <Link to={LATEST_POSTS}>Blog post</Link>
      </HeaderH1>
      <Switch>
        <Route path={LATEST_POSTS} exact component={ContainerLatestPosts} />
        <Route path={VIEW_POST_PARAM} component={ContainerViewPost} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
