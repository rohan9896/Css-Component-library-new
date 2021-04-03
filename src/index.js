import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {SelectedComponentProvider} from './Components/Context/selected-component-context'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SelectedComponentProvider>
        <App />
      </SelectedComponentProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
