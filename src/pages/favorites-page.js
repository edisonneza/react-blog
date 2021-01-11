import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

export default function FavoritesPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Preferencat</h4>
    </div>
  );
}
