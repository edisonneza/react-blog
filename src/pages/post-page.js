import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../components/post/post-component";
import SiteService from "../services/siteService";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginTop: 15,
  },
});

export default function PostPage() {
  const classes = useStyles();
  const location = useLocation();

  const [post, setPost] = useState(location.state.post);

  useEffect(() => {
    
  }, []);

  return (
    <div className={classes.root}>
      {post ? <Post post={post} /> : <center><CircularProgress /></center>}
    </div>
  );
}
