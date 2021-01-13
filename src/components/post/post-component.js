import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Divider from '@material-ui/core/Divider';
import './post-component.css';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: "url(https://source.unsplash.com/random)",
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
    margin: 40,
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(10),
      paddingRight: 0,
    },
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
    const { post } = props;
//   console.log(props);

  console.log(post)

  return (
    <main>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        {/* Increase the priority of the hero background image */}
        {
        //   <img
        //     style={{ display: "none" }}
        //     src={post.image}
        //     alt={post.imageText}
        //   />
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
              {/* <Typography variant="h5" color="inherit" paragraph>
              {post.description.split(" ").splice(0, 10).join(" ")}...
            </Typography> */}
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Divider />
      <Grid item xs={12} md={8}>
      <Typography variant="h5" gutterBottom style={{padding: 10}}>
        {post.title}
      </Typography>
      <Divider />
      <Typography variant="body1" className={"description"} dangerouslySetInnerHTML={{ __html: post.description}}>
      </Typography>
      </Grid>
    </main>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
