import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 190,
  },
});

export default function Skeletons() {
  const classes = useStyles();

  
  return (
    <>
      <Skeleton animation="wave" variant="rect" className={classes.media} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <br /> <br />
      <Grid container spacing={3}>
        {Array.from(new Array(3)).map((index) => (
          <Grid item xs={12} md={4}>
            <Skeleton
              animation="wave"
              variant="rect"
              className={classes.media}
            />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
