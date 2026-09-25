import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      );
      setJoke(response.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Random Joke</h1>
        <p className="subtitle">Click the button to fetch a fresh one.</p>

        <button className="fetch-btn" onClick={fetchJoke} disabled={loading}>
          {loading ? "Fetching..." : "Fetch joke"}
        </button>

        <div className="content-area">
          {joke ? (
            <div className="joke-box">
              <p className="setup">{joke.setup}</p>
              <p className="punchline">
                <strong>{joke.punchline}</strong>
              </p>
            </div>
          ) : (
            <p className="placeholder">No joke yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
