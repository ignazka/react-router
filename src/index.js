import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Dogs from "./routes/Dogs";
import Cats from "./routes/Cats";
import Navigation from "./components/Navigation";
const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <div className="routes">

   
      <Routes>
        {/* // nested routes */}
        <Route path="/" element={<App />}>
        {/* // children of App Route */}
        <Route path="/about" element={<About />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
        </Route>
      </Routes>
      </div>

    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
