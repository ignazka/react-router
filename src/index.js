import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Dogs from "./routes/Dogs";
import Navigation from "./components/Navigation";
import DogCard from "./routes/DogCard";
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
            <Route path="/dogs" element={<Dogs />} >
              <Route path=':dogId' element={<DogCard />} />
            </Route>
          
          </Route>
          <Route
              path="*"
              element={
                <main>
                  <h1>There's nothing here!</h1>
                  <img style={{ objectFit: "cover", borderRadius: "360px", padding: "1em", height: "600px", width: "600px"}} src='https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg' alt='cat' />
                </main>
              }
            />
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
