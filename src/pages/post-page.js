import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../components/post/post-component";
import SiteService from "../services/siteService";
import CircularProgress from "@material-ui/core/CircularProgress";

const service = new SiteService();

const useStyles = makeStyles({
  root: {
    marginTop: 15,
  },
});

export default function PostPage() {
  const classes = useStyles();
  const [post, setPost] = useState(null);

  useEffect(() => {
    service
      .getPostByHref("https://shop.shpresa.al/wp-json/wp/v2/posts/43825")
      .then((data) => setPost(data));
  }, []);

  return (
    <div className={classes.root}>
      {post ? <Post post={post} /> : <center><CircularProgress /></center>}
    </div>
  );
}
