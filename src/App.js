import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import SettingsPage from "./pages/settings-page";
import LabelBottomNavigation from "./components/bottom-navigation";
import AppHeader from "./components/app-header";
import SearchPage from "./pages/search-page";
import SavedPage from "./pages/saved-page";
import PostPage from "./pages/post-page";
import FavoritesPage from "./pages/favorites-page";
import { Container, Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { isMobile } from "./utils/functions";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Theme from "./components/theme";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <CssBaseline />
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <AppHeader />

            <Container>
              <Box>
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
                  <Route path="/post">
                    <PostPage />
                  </Route>
                </Switch>
              </Box>
            </Container>
            <br />
            <br />
            <br />
            <br />
            {isMobile() && <LabelBottomNavigation />}
          </div>
        </Router>
      </Theme>
    </Provider>
  );
}

export default App;
