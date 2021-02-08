import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { setPost } from "../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function FeaturedPost(props) {
  const dispatch = useDispatch();

  const handlePost = (post) => dispatch(setPost(post));

  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              dangerouslySetInnerHTML={{
                __html:
                  post.description.split(" ").splice(0, 15).join(" ") + "...",
              }}
            >
              {/* {post.description.split(' ').splice(0, 10).join(' ')}... */}
            </Typography>
            <Button
              size="small"
              color="primary"
              // onClick={() => history.push(location)}
              onClick={() => handlePost(post)}
            >
              Vazhdo leximin...
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
