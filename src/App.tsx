import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/Store";
import { Graph } from "@/components";

export default () => (
  <Provider store={store}>
    <div>
      <Graph />
    </div>
  </Provider>
);
