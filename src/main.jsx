import React from "react";
import ReactDOM from "react-dom/client";
import { extend } from "@react-three/fiber";
import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  HemisphereLight,
  PointLight,
  SpotLight,
} from "three";
import App from "./App.jsx";
import "./index.css";

// Extend the three.js elements
extend({
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  HemisphereLight,
  PointLight,
  SpotLight,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
