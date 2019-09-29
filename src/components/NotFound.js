import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2> Page Not found </h2>
      <Link to="/">Go back Home</Link>
    </>
  );
}

export default NotFound;
