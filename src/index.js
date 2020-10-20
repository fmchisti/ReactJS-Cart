import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </StateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
