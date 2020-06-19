import React from 'react';
import Home from "./view/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {Player, Fixture, Livescore} from "./components";
import { BrowserRouter as Router, Route, } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/livescore" commponent={Livescore}></Route>
        <Route path="/player" commponent={Player}></Route>
        <Route path="/fixture" commponent={Fixture}></Route>
      </Router>
    </Provider>
  );
}

export default App;
