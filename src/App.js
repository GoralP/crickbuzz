import React from 'react';
import { Router } from "@reach/router";
import Home from "./view/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Home path="/" />
        
      </Router>
    </Provider>
  );
}

export default App;
