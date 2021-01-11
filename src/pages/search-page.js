import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

export default function SearchPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Kërko</h4>
    </div>
  );
}
