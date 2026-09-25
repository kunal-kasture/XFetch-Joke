import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Random Joke</h1>
        <p className="subtitle">Click the button to fetch a fresh one.</p>

        <button className="fetch-btn">Fetch joke</button>

        <div className="content-area">
          <p className="placeholder">No joke yet.</p>
        </div>
      </div>
    </div>
  );
}
