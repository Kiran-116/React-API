import React, { useState, useEffect } from "react";
import {Routes, Router, Route, BrowserRouter} from "react-router-dom";
import styles from './App.module.css';
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShowId, setSelectedShowId] = useState(null);

  useEffect(() => {
      const fetchShows = async () => {
        try {
          const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
          const data = await response.json();
          const formattedShows = data.map((entry) => entry.show);
          setShows(formattedShows);
        } catch (error) {
          console.error('Failed to fetch show data:', error);
        }
      };

      fetchShows();
  }, []);


  const handleSelectShow = (showId) => {
    setSelectedShowId(showId);
  };

  return (
    <div className={styles.container}>
      {/* {selectedShowId ? (
        <ShowSummary showId={selectedShowId} />
      ) : (
        <ShowList shows={shows} onSelectShow={handleSelectShow} />
      )} */}
 
      <Routes>
          <Route path="/" element={ <ShowList shows={shows} onSelectShow={handleSelectShow} /> } />
          <Route path="/summary/:id" element={ <ShowSummary showId={selectedShowId} /> } />
      </Routes>
    </div>
  );
};

export default App;
