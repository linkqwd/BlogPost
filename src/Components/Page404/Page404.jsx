import React from "react";

const Page404 = props => {
  return <div> {props.message ? props.message : "No such page"}</div>;
};

export default Page404;
