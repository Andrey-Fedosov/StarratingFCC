import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StarRating } from "./components/starRating/StarRating";

function App() {
  return (
    <div className="star-rating">
      <StarRating numberOfStar={6} />
    </div>
  );
}

export default App;
