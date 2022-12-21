import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

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
