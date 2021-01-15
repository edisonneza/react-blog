import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Divider } from "@material-ui/core";
import Posts from "../components/home/posts-component";
import { GetValue } from "../services/storageService";

const useStyles = makeStyles({
  root: {},
  gridContainer: {
    display: "flex",
    alignItems: "center",
  },
});

export default function SavedPage() {
  const classes = useStyles();

  const [searchVal, setSearchVal] = useState("");
  const [posts, setPosts] = useState();

  useEffect(() => {
    if (searchVal.length > 2) {
      const posts = GetValue("savedPost");
      if (posts) {
        const postsFound = posts.filter(
          (item) =>
            item.title.toLowerCase().indexOf(searchVal.toLowerCase()) > -1
        );
        setPosts(postsFound);
      }
    } else {
      setPosts(GetValue("savedPost"));
    }
  }, [searchVal]);

  const handleChange = (ev) => {
    setSearchVal(ev.target.value);
  };

  const handleDelete = (post) => {
    setPosts(GetValue("savedPost"));
  };

  return (
    <div className={classes.root}>
      {/* <h4>Kërko</h4> */}
      <Grid container className={classes.gridContainer}>
        <Grid item xs={false} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="standard-full-width"
            label="Kërkoni një postim të ruajtur"
            style={{ margin: 8 }}
            value={searchVal}
            // placeholder="Shkruani një fjalë ose një grup fjalësh"
            helperText="Me shumë se 2 karaktere"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
            autoComplete="off"
          />
        </Grid>
      </Grid>
      <Divider />
      <br />
      <Grid container>
        {posts && posts.length ? (
          <Posts posts={posts} showDelete handleDelete={handleDelete} />
        ) : (
          <h3 style={{width: "100%", textAlign: "center"}}>
            Asnjë postim nuk u gjend.
          </h3>
        )}
      </Grid>
    </div>
  );
}
