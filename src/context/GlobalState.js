import React, { useState } from "react";
import GlobalContext from "./global-context";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SaveValue, GetValue } from "../services/storageService";
import Constants from '../constants/constants';
import FullScreenPostDialog from "../components/post/dialog-fullscreen-component";

export default function GlobalState({ children }) {
  if (GetValue("darkTheme") === undefined) {
    SaveValue("darkTheme", false);
  }
  const darkTheme = GetValue("darkTheme");

  const [globalState, setGlobalState] = useState({
    //this can be different from user-context.js (for example u can fetch new data etc)
    title: Constants.appName,
    darkTheme,
    posts: null,
    categories: null,
    tags: null,
    post: null,
    tabSelected: { index: 0, value: "" },
    searchPosts: {
      searchValue: '',
      posts: null
    },
  });

  const palletType = globalState.darkTheme ? "dark" : "light";
  const mainPrimaryColor = globalState.darkTheme ? orange[500] : lightBlue[500];
  const mainSecondaryColor = globalState.darkTheme
    ? deepOrange[900]
    : deepPurple[500];

  let handleTitle = (value) => setGlobalState({ ...globalState, title: value });
  let handleDarkTheme = (value) => {
    SaveValue("darkTheme", value);
    setGlobalState({ ...globalState, darkTheme: value });
  };

  let handlePost = (post) => setGlobalState({ ...globalState, post });
  let handlePosts = (posts) => setGlobalState({ ...globalState, posts });
  let handleSearchPosts = (searchPosts) => setGlobalState({ ...globalState, searchPosts });
  let handleCategories = (categories) =>
    setGlobalState({ ...globalState, categories });
  let handleTags = (tags) => setGlobalState({ ...globalState, tags });
  let handleTabSelected = (tabSelected) => setGlobalState({ ...globalState, tabSelected });
  console.log(globalState);

  const Theme = {
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  };
  const theme = createMuiTheme(Theme);

  return (
    <GlobalContext.Provider
      value={{
        title: globalState.title,
        handleTitle,
        darkTheme: globalState.darkTheme,
        handleDarkTheme,
        posts: globalState.posts,
        handlePosts,
        handlePost,
        categories: globalState.categories,
        handleCategories,
        tags: globalState.tags,
        handleTags,
        tabSelected: globalState.tabSelected,
        handleTabSelected,
        searchPosts: globalState.searchPosts,
        handleSearchPosts
      }}
    >
      <ThemeProvider theme={theme}>
        {
          <FullScreenPostDialog
            post={globalState.post}
            handlePost={handlePost}
          />
        }

        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
