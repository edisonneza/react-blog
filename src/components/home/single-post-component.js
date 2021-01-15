import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { DateFromNow } from "../../utils/functions";
import GlobalContext from "../../context/global-context";
import { Delete } from "@material-ui/icons";
import { GetValue, SaveValue } from "../../services/storageService";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  deleteBtn: {
    flex: 2,
  },
});

export default function SinglePost(props) {
  const classes = useStyles();
  const { post, showDelete, handleDelete } = props;
  const { handlePost } = useContext(GlobalContext);
  const [openDialog, setOpenDialog ] = useState(false);

  const handleDeletePost = () => {
    const posts = GetValue('savedPost');
    if(posts){
      const otherPosts = posts.filter(item => item.originalLink != post.originalLink);
      SaveValue('savedPost', otherPosts);
      handleDelete(post); //to refresh the post list in parent component
    }
  }

  return (
    <>
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
          <CardContent>
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
            <i>{DateFromNow(post.date)}</i>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justify="space-between">
            <Grid item>
              <IconButton
                color="primary"
                aria-label="Facebook"
                component="span"
                size="small"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="WhatsApp"
                component="span"
                size="small"
              >
                <WhatsAppIcon />
              </IconButton>

              <Button
                size="small"
                color="primary"
                // onClick={() => history.push({ pathname: post.link, state: { post } })}
                onClick={() => handlePost(post)}
              >
                Vazhdo leximin...
              </Button>
            </Grid>

            {showDelete && (
              <Grid item>
                <IconButton
                  color="secondary"
                  aria-label="Fshi postimin"
                  component="span"
                  size="small"
                  onClick={() => setOpenDialog(true)}
                >
                  <Delete />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </CardActions>
      </Card>
    </Grid>

    <Dialog
        open={openDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Jeni të sigurtë për fshirjen e këtij postimi?"}</DialogTitle>
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
  handleDelete: PropTypes.func
};
