import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import DataGrid from "./DataGrid";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataGrid />
  </StrictMode>,
  rootElement
);
