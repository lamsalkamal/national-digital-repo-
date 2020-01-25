import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Landing from "./components/landing/Landing";
import Header from "./components/landing/Header";
import UploadThesis from "./components/upload-thesis/UploadThesis";

const theme = {
  primary: "#41C3C4",
  darkPrimary: "#3aafb0",
  red: " #BE0006",
  yellow: "#FFCC00",
  darkYellow: "#e5b700",
  green: "#3DAA00",
  black: "#333",
  white: "#eee",
  maxWidth: "100%"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/search" component={Landing} />
              <Route exact path="/upload-thesis" component={UploadThesis} />
            </div>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
