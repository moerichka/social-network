import React from "react";
import { Provider } from "react-redux";
import Router from "./Router";

import { store } from "./store";

import "./styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
