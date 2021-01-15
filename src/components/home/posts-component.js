import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import SinglePost from './single-post-component';

export default function Posts(props) {
  const { posts, showDelete, handleDelete } = props;

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <SinglePost key={post.title} post={post} showDelete={showDelete} handleDelete={handleDelete} />
      ))}
    </Grid>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
  showDelete: PropTypes.bool,
  handleDelete: PropTypes.func
};
