import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; 
import store from "./03-redux/store"; 

import ReduxDemo from "./03-redux"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}> 
    <ReduxDemo />
  </Provider>
);
