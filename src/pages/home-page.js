import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SectionsHeader from "../components/home/sections-component";
import FeaturedPost from "../components/featured-post-component";
import Posts from "../components/home/posts-component";
import SiteService from "../services/siteService";
import FullScreenPostDialog from "../components/post/dialog-fullscreen-component";
import { CircularProgress } from "@material-ui/core";
import Skeletons from "../components/skeletons-component";

const useStyles = makeStyles({
  root: {},
});

const service = new SiteService();

export default function HomePage() {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [mainFeaturedPost, setMainFeaturedPost] = useState();
  const [featuredPosts, setFeaturedPosts] = useState();

  useEffect(() => {
    service.getCategories().then((data) => setCategories(data));
    service.getHashTags().then((data) => setTags(data));
    service.getPosts().then(data => setFeaturedPosts(data));
    service
      .getPostByHref("https://shop.shpresa.al/wp-json/wp/v2/posts/43825")
      .then((data) => setMainFeaturedPost(data));

  }, []);
  console.log(categories);

  const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
  ];



  return (
    <div className={classes.root}>
      {/* <h4>Faqja kryesore</h4> */}
      <SectionsHeader sections={sections} title="test" />
      <main>
        {(mainFeaturedPost && featuredPosts) ?
        <>
        <FeaturedPost post={mainFeaturedPost} /> 
        <Posts posts={featuredPosts} />
        </>
        : 
          <Skeletons />
        }
        {/* <FullScreenPostDialog /> */}
        
      </main>
    </div>
  );
}
