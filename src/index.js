import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CodeEditorWithPreview from "./App";

import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="w-full h-screen overflow-hidden flex flex-col">
    <Navbar />
    <CodeEditorWithPreview />
  </div>
);
