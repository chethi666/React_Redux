import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink exact activeStyle={activeStyle} to="/">
        Home Page
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="/about">
        About Page
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="/courses">
        Courses Page
      </NavLink>
    </nav>
  );
}

export default Header;
