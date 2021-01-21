import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChipsComponent from "../components/favorites/chips-component";

const useStyles = makeStyles({
  root: {},
});

export default function FavoritesPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Zgjidhni perferencat në bazë të të cilave do ju shfaqen postimet</h4>
      <ChipsComponent />
    </div>
  );
}
