import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight administration</h1>
      <p>React , Flux Web App</p>
      <Link to="about" className="btn btn-primary">
        About Page
      </Link>
    </div>
  );
}

export default HomePage;
