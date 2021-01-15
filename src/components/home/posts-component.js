import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SinglePost from './single-post-component';

export default function Posts(props) {
  const { posts, showDelete } = props;

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <SinglePost key={post.title} post={post} showDelete={showDelete} />
      ))}
    </Grid>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
  showDelete: PropTypes.bool
};
