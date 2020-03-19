import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./Redux/Store";
import { Graph } from "./components";

const App = () => {
  return (
    <div>
      <Graph />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
