import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      );
      setJoke(response.data);
    } catch (err) {
      setError(true);
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
          {error ? (
            <div className="error-box">
              <p className="error-text">Could not fetch a joke. Try again.</p>
              <button type="button" className="retry-btn" onClick={fetchJoke}>
                Try again
              </button>
            </div>
          ) : joke ? (
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
