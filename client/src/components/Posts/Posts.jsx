import React from "react";
import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  return (
    <div>
      <h3>Posts</h3>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
