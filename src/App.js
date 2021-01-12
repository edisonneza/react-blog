import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/home-page";
import SettingsPage from "./pages/settings-page";
import LabelBottomNavigation from "./components/bottom-navigation";
import AppHeader from "./components/app-header";
import SearchPage from "./pages/search-page";
import SavedPage from "./pages/saved-page";
import FavoritesPage from "./pages/favorites-page";
import GlobalState from "./context/GlobalState";
import { Container, Box } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <GlobalState>
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
              </Switch>
            </Box>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <LabelBottomNavigation />
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
