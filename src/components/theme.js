import React from "react";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";
import FullScreenPostDialog from "./post/dialog-fullscreen-component";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { setPost } from "../redux/actions/actions";

export default function Theme({ children }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post, shallowEqual);
  const darkTheme = useSelector((state) => state.darkTheme);

  const palletType = darkTheme ? "dark" : "light";
  const mainPrimaryColor = darkTheme ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkTheme ? deepOrange[900] : deepPurple[500];

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

  const handlePost = (post) => dispatch(setPost(post));

  return (
    <ThemeProvider theme={theme}>
      <FullScreenPostDialog post={post} handlePost={handlePost} />
      {children}
    </ThemeProvider>
  );
}
