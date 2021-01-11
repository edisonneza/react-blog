import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GlobalContext from "./context/global-context";
import HomePage from "./pages/home-page";
import SettingsPage from "./pages/settings-page";
import LabelBottomNavigation from "./components/bottom-navigation";
import AppHeader from "./components/app-header";
import SearchPage from "./pages/search-page";
import SavedPage from "./pages/saved-page";
import FavoritesPage from "./pages/favorites-page";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const [globalState, useGlobalState] = useState({
    //this can be different from user-context.js (for example u can fetch new data etc)
    title: "tech news 1",
    user: {
      name: "soni",
      lastName: "neza",
      age: 26,
      country: "Albania",
      city: "Durres",
    },
  });

  const handleChangeUser = (user) => {
    console.log("Changing user", user);
  };

  let HandleTitle = (value) => {
    useGlobalState({ title: value});
  };
  

  const Theme = {
    palette: {
      primary: {
        main: "#24aee1",
      },
      // secondary: {
      //   main: "#FFFFFF",
      // },
    },
  };
  const theme = createMuiTheme(Theme);

  return (
    <GlobalContext.Provider
      value={{
        title: globalState.title,
        user: globalState.user,
        changeUser: globalState.handleChangeUser,
        handleTitle: HandleTitle
      }}
    >
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <AppHeader />

            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/search">
                <SearchPage />
              </Route>
              <Route path="/favorites">
                <FavoritesPage />
              </Route>
              <Route path="/saved">
                <SavedPage />
              </Route>
              <Route path="/settings">
                <SettingsPage />
              </Route>
            </Switch>
            <LabelBottomNavigation />
          </div>
        </Router>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
