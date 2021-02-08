import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarMenu from './sidebar-menu-component';
import { isMobile } from '../utils/functions';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper
  },
  toolbar: {
    minHeight: "44px",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  // appBar: {
  //   backgroundColor: theme.palette.grey[800]
  // }
}));

export default function AppHeader() {
  const classes = useStyles();
  const title = useSelector(state => state.title);
  const mobile = isMobile();

  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          {!mobile && (<IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>) }
          <Typography variant="h6" className={classes.title}>
            {/* Lajmet e përmbledhura teknologjike */}
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      {!mobile && <SideBarMenu open={open} handleOpen={() => setOpen(!open)}/>}
    </div>
  );
}
