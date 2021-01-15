import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import FeaturedPost from "./post-component";
import { Container, Fab } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { SavePost } from "../../services/storageService";
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

  const handleClose = () => {
    props.handlePost(null);
  };

  const handleSavePost = () => {
    SavePost(props.post);
  }

  let open = !!props.post;

  return (
    <div>
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
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={handleSavePost}
          >
            Ruaj postimin
          </Button>



          <Divider />
          <br /> <br />
          <Fab
            aria-label={"test"}
            className={classes.fab}
            color="primary"
            onClick={handleClose}
            size="small"
          >
            <CloseIcon />
          </Fab>
        </Container>
      </Dialog>
    </div>
  );
}
