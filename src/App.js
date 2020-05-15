import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListMovie from "./MovieList";
import AddModal from "./Modal";
import EntryPage from "./register";
import Home from "./home";

import Search from "./Search";
import { BrowserRouter, Route } from "react-router-dom";
import Favorite from "./favorite/favorite";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={EntryPage} />
          <Route exact path="/home" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
