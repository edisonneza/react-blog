import React, { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { DateFromNow, ShareAPI } from "../../utils/functions";
import { Delete } from "@material-ui/icons";
import { GetValue, SaveValue } from "../../services/storageService";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { SavePost } from "../../services/storageService";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarNotify from "../snackbar-notify-component";
import { useDispatch } from "react-redux";
import { setPost } from "../../redux/actions/actions";

const useStyles = makeStyles({
  cardContent: {
    padding: "10px 8px 0 10px",
  },
});

export default function SinglePost(props) {
  const classes = useStyles();
  const { post, showDelete, handleDelete } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbarNotify, setOpenSnackbarNotify] = useState(false);
  const dispatch = useDispatch();
  const handlePost = (post) => dispatch(setPost(post));
  
  const handleDeletePost = () => {
    const posts = GetValue("savedPost");
    if (posts) {
      const otherPosts = posts.filter(
        (item) => item.originalLink !== post.originalLink
      );
      SaveValue("savedPost", otherPosts);
      handleDelete(post); //to refresh the post list in parent component
    }
  };

  const handleSavePost = () => {
    SavePost(post);
    setOpenSnackbarNotify(true);
  };

  const handleShare = () => {
    const title = post.title;
    const text = `Une po lexoj nga webi Tech News. Lexo postimin ne linkun origjinal: ${post.title}`;
    const url = post.originalLink;

    ShareAPI(title, text, url);
  };

  return (
    <>
      {openSnackbarNotify && (
        <SnackbarNotify message="Posti u ruaj me sukses!" />
      )}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            {/* <CardActionArea component="a" href="#"> */}
            {/* <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card> */}
            <CardMedia
              component="img"
              alt={post.imageTitle}
              height="140"
              image={post.image}
              title={post.imageTitle}
            />
            <CardContent
              onClick={() => handlePost(post)}
              className={classes.cardContent}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                dangerouslySetInnerHTML={{
                  __html:
                    post.shortDesc.split(" ").splice(0, 20).join(" ") + "...",
                }}
              ></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container justify="space-between">
              <Grid item>
                <i style={{ marginRight: 20 }}>{DateFromNow(post.date)}</i>

                {/* <IconButton
                color="primary"
                aria-label="WhatsApp"
                component="span"
                size="small"
              >
                <WhatsAppIcon />
              </IconButton> */}

                {/* <Button
                size="small"
                color="primary"
                // onClick={() => history.push({ pathname: post.link, state: { post } })}
                onClick={() => handlePost(post)}
              >
                Vazhdo leximin...
              </Button> */}
              </Grid>

              <Grid item>
                <IconButton
                  color="primary"
                  aria-label="Ruaj"
                  component="span"
                  onClick={handleSavePost}
                  size="small"
                  style={{ marginRight: 10 }}
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Share"
                  component="span"
                  size="small"
                  onClick={handleShare}
                >
                  <ShareIcon />
                </IconButton>

                {showDelete && (
                  <IconButton
                    color="secondary"
                    aria-label="Fshi postimin"
                    component="span"
                    size="small"
                    onClick={() => setOpenDialog(true)}
                    style={{ marginLeft: 10 }}
                  >
                    <Delete />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>

      <Dialog
        open={openDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Jeni të sigurtë për fshirjen e këtij postimi?"}
        </DialogTitle>
        <DialogActions>
          <Button color="primary" onClick={() => setOpenDialog(false)}>
            Jo
          </Button>
          <Button onClick={handleDeletePost} color="primary" autoFocus>
            Po
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

SinglePost.propTypes = {
  post: PropTypes.object,
  showDelete: PropTypes.bool,
  handleDelete: PropTypes.func,
};
