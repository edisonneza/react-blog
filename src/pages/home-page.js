import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <h4>Faqja kryesore</h4>
    </div>
  );
}
