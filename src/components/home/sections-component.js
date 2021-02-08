import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { setTabSelected } from "../../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    // borderRadius: '50%',
    // width: 100,
    // height: 100,
    // padding: 10,
    // marginRight: 5,
    // border: '1px solid red'
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function SectionsHeader(props) {
  const classes = useStyles();
  const tabSelected = useSelector(state => state.tabSelected);
  const dispatch = useDispatch();

  const { sections } = props;
  const [value, setValue] = useState({
    id: tabSelected.index,
    value: sections[tabSelected.index].title,
  });

  const handleTabChange = (event, val) => {
    dispatch(setTabSelected({index: val, value: event.target.innerText}));
    setValue({ id: val, value: event.target.innerText });
  };

  return (
    <React.Fragment>
      {/* <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar> */}
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <Tabs
          value={value.id}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {sections.map((section, index) => (
            <Tab key={index} label={section.title} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Toolbar>
    </React.Fragment>
  );
}

SectionsHeader.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
