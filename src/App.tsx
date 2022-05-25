import React, { useMemo, useState } from "react";
import { LocationContext } from "./Helpers/Contexts/LocationContext";
import HomePage from "./Pages/HomePage/HomePage";
import ResultsPage from "./Pages/ResultsPage/ResultsPage";
import BookingPage from "./Pages/BookingPage/BookingPage";

import "./App.scss";

function App() {
  const [userLocation, setUserLocation] = useState("");

  const locationProviderValues = useMemo(
    () => ({ userLocation, setUserLocation }),
    [userLocation, setUserLocation]
  );

  return (
    <div className="App">
      <LocationContext.Provider value={locationProviderValues}>
        <HomePage />
        <ResultsPage />
        <BookingPage />
      </LocationContext.Provider>
    </div>
  );
}

export default App;

