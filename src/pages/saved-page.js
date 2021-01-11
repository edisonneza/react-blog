import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

export default function SavedPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Postimet e ruajtuara</h4>
    </div>
  );
}
