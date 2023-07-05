import { Controller } from "@hotwired/stimulus";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App";
// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("Connected!");
    const app = document.getElementById("root");
    const root = ReactDOM.createRoot(app);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
