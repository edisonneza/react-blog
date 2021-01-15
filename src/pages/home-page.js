import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SectionsHeader from "../components/home/sections-component";
import FeaturedPost from "../components/featured-post-component";
import Posts from "../components/home/posts-component";
import SiteService from "../services/siteService";
import FullScreenPostDialog from "../components/post/dialog-fullscreen-component";
import { CircularProgress, IconButton, useTheme } from "@material-ui/core";
import Skeletons from "../components/skeletons-component";
import GlobalContext from "../context/global-context";
import { usePrevious } from "../customHooks/custom-hooks";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import SnackbarNoInternet from "../components/snackbar-no-internet-component";


const useStyles = makeStyles((theme) => ({
  root: {},
  close: {
    padding: theme.spacing(0.5),
  },
}));

const service = new SiteService();

export default function HomePage() {
  const classes = useStyles();
  const {
    posts,
    handlePosts,
    categories,
    handleCategories,
    tags,
    handleTags,
    tabSelected,
  } = useContext(GlobalContext);

  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState("");

  const tabSelectedPrev = usePrevious(tabSelected);
  useEffect(() => {
    if (!categories)
      service.getCategories().then((data) => handleCategories(data));
    if (!tags) service.getHashTags().then((data) => handleTags(data));
    if (!posts || (tabSelectedPrev && tabSelectedPrev != tabSelected)) {
      setIsLoading(true);
      let searchVal = tabSelected.index > 0 ? tabSelected.value : "";
      service
        .getPosts(searchVal)
        .then((data) => {
          handlePosts(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setErrors(error.errorMessage);
        });
    } else setIsLoading(false);
  }, [tabSelected.index]);

  const sections = [
    { title: "Të gjitha", url: "#" },
    { title: "Teknologji", url: "#" },
    { title: "Apple", url: "#" },
    { title: "Microsoft", url: "#" },
    { title: "Android", url: "#" },
    { title: "Samsung", url: "#" },
    { title: "Shkence", url: "#" },
    { title: "Programim", url: "#" },
    { title: "Design", url: "#" },
    { title: "Nasa", url: "#" },
    { title: "Covid", url: "#" },
  ];

  return (
    <div className={classes.root}>
      {/* <h4>Faqja kryesore</h4> */}
      <SectionsHeader sections={sections} title="test" />
      <main>
        <SnackbarNoInternet />
        {!isLoading && posts.length > 0 ? (
          <>
            <FeaturedPost post={posts[0]} />
            <Posts posts={posts.filter((item, index) => index != 0)} />{" "}
            {/* get all but not first item (because is used in FeaturedPost) */}
          </>
        ) : (
          <>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={!!errors}
              message={errors}
              key={"topcenter"}
              action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    className={classes.close}
                    onClick={() => setErrors('')}
                  >
                    <CloseIcon />
                  </IconButton>
              }
            />
            <Skeletons />
          </>
        )}
        {/* <FullScreenPostDialog /> */}
      </main>
    </div>
  );
}
