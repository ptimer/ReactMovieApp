import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
	    <App />
	  </Provider>
  </React.StrictMode>,
  rootElement
);

serviceWorker.unregister();