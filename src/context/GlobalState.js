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
// import Constants from '../constants/constants';
import FullScreenPostDialog from '../components/post/dialog-fullscreen-component';

export default function GlobalState({ children }) {
  if(GetValue('darkTheme') === undefined){
      SaveValue('darkTheme', false);
  }
  const darkTheme = GetValue('darkTheme');

  const [globalState, setGlobalState] = useState({
    //this can be different from user-context.js (for example u can fetch new data etc)
    // title: Constants.appName,
    user: {
      name: "soni",
      lastName: "neza",
      age: 26,
      country: "Albania",
      city: "Durres",
    },
    darkTheme,
    post: null
  });

  const palletType = globalState.darkTheme ? "dark" : "light";
  const mainPrimaryColor = globalState.darkTheme ? orange[500] : lightBlue[500];
  const mainSecondaryColor = globalState.darkTheme
    ? deepOrange[900]
    : deepPurple[500];

  const handleChangeUser = (user) => {
    console.log("Changing user", user);
  };

  let handleTitle = (value) => {
    setGlobalState({ ...globalState, title: value });
  };
  let handleDarkTheme = (value) => {
    SaveValue('darkTheme', value);
    setGlobalState({ ...globalState, darkTheme: value });
  }

  let handlePost = (post) => {
    setGlobalState({ ...globalState, post });

  }

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
        user: globalState.user,
        changeUser: globalState.handleChangeUser,
        handleTitle,
        darkTheme: globalState.darkTheme,
        handleDarkTheme,
        handlePost
      }}
    >
      <ThemeProvider theme={theme}>
        {<FullScreenPostDialog post={globalState.post} handlePost={handlePost} />}

        {children}
        </ThemeProvider>
    </GlobalContext.Provider>
  );
}
