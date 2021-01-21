import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import { Slide } from "@material-ui/core";
import FeaturedPost from "./post-component";
import { Container, Fab } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import { SavePost } from "../../services/storageService";
import { ShareAPI } from "../../utils/functions";
import SnackbarNotify from '../snackbar-notify-component';
// import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenPostDialog(props) {
  const classes = useStyles();
  const [openSnackbarNotify, setOpenSnackbarNotify] = useState(false);

  const handleClose = () => {
    props.handlePost(null);
  };

  const handleSavePost = () => {
    SavePost(props.post);
    setOpenSnackbarNotify(true);
    setTimeout(() => {
      setOpenSnackbarNotify(false);
    }, 2000);
  }

  const handleShare = () => {
    const title = props.post.title;
    const text = `Une po lexoj nga webi Tech News. Lexo postimin ne linkun origjinal: ${props.post.title}`
    const url = props.post.originalLink;

    ShareAPI(title, text, url);
  }

  let open = !!props.post;

  return (
    <div>
      {openSnackbarNotify && (
        <SnackbarNotify message="Posti u ruaj me sukses!" />
      )}
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* <AppBar className={classes.appBar}>
          <Toolbar className={classes.title}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar> */}
        <br />
        <br />
        <Container>
          {props.post && <FeaturedPost post={props.post} />}
          <Divider />

          <IconButton
            className={classes.buttons}
            aria-label="ruaj"
            component="span"
            onClick={handleSavePost}
            // size="large"
          >
            <FavoriteBorderIcon fontSize="large"/>
          </IconButton>
          <IconButton
            className={classes.buttons}
            aria-label="Share"
            component="span"
            // size="large"
            onClick={handleShare}
          >
            <ShareIcon fontSize="large"/>
          </IconButton>


          <Divider />
          <br /> <br />
          <Fab
            aria-label={"test"}
            className={classes.fab}
            color="primary"
            onClick={handleClose}
            // size="small"
          >
            <CloseIcon />
          </Fab>
        </Container>
      </Dialog>
    </div>
  );
}
