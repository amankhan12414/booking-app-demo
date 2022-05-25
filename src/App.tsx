import React from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import ResultsPage from "./Pages/ResultsPage/ResultsPage";
import BookingPage from "./Pages/BookingPage/BookingPage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <ResultsPage />
      <BookingPage />
    </div>
  );
}

export default App;

