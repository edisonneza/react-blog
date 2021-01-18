import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import "./post-component.css";
import { ToDateTime } from '../../utils/functions';

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
    minHeight: 320
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
  buttonsDiv: {
    margin: 5,
  },
  buttons: {
    marginRight: 15,
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <main>
      <Paper
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${post.image})` }}
      >
      </Paper>
      <Divider />
      <Grid item xs={12} md={9}>
        <Typography variant="h5" gutterBottom style={{ padding: 10 }}>
          {post.title}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" className={classes.buttonsDiv}>
          <Button
            variant="outlined"
            size="small"
            className={classes.buttons}
            href={post.originalLink}
            target="_blank"
          >
            Linku origjinal
          </Button>
          {/* <IconButton
            className={classes.buttons}
            aria-label="Facebook"
            component="span"
            size="small"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            className={classes.buttons}
            aria-label="WhatsApp"
            component="span"
            size="small"
          >
            <WhatsAppIcon /> 
          </IconButton> */}
            <i style={{fontSize: 12}}>{ToDateTime(post.date)}</i>
        </Typography>
        <Divider />
        <Typography
          variant="body1"
          className={"description"}
          dangerouslySetInnerHTML={{ __html: post.description }}
        ></Typography>
      </Grid>
    </main>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
