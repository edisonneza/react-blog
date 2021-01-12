import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SinglePost from './single-post-component';

export default function Posts(props) {
  const { posts } = props;

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <SinglePost key={post.title} post={post} />
      ))}
    </Grid>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
};
