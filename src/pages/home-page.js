import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SectionsHeader from "../components/home/sections-component";
import FeaturedPost from "../components/featured-post-component";
import Posts from "../components/home/posts-component";
import SiteService from "../services/siteService";
import FullScreenPostDialog from "../components/post/dialog-fullscreen-component";
import { CircularProgress } from "@material-ui/core";
import Skeletons from "../components/skeletons-component";
import GlobalContext from '../context/global-context';

const useStyles = makeStyles({
  root: {},
});

const service = new SiteService();

export default function HomePage() {
  const classes = useStyles();
  const { posts, handlePosts, categories, handleCategories, tags, handleTags } = useContext(GlobalContext);

  const [mainFeaturedPost, setMainFeaturedPost] = useState();

  useEffect(() => {
    if(!categories)
      service.getCategories().then((data) => handleCategories(data));
    if(!tags)
      service.getHashTags().then((data) => handleTags(data));
    if(!posts)
      service.getPosts().then(data => handlePosts(data));
    // service
    //   .getPostByHref("https://shop.shpresa.al/wp-json/wp/v2/posts/43825?_embed=wp:featuredmedia")
    //   .then((data) => setMainFeaturedPost(data));

  }, []);
  // console.log(categories);

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
        {(posts) ?
        <>
        <FeaturedPost post={posts[0]} /> 
        <Posts posts={posts.filter((item, index) => index != 0)} /> {/* get all but not first item (because is used in FeaturedPost) */}
        </>
        : 
          <Skeletons />
        }
        {/* <FullScreenPostDialog /> */}
        
      </main>
    </div>
  );
}
