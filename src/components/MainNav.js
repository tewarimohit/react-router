import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <main>
        <nav>
          <ul className="list">
            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Home
              </NavLink>
            </li>
            <li className="list">
              {" "}
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
};

export default MainNav;
