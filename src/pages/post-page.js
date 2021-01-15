import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../components/post/post-component";
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

  // const [post, setPost] = useState(location.state.post);

  useEffect(() => {
    
  }, []);

  return (
    <div className={classes.root}>
      {location.state.post ? <Post post={location.state.post} /> : <center><CircularProgress /></center>}
    </div>
  );
}
