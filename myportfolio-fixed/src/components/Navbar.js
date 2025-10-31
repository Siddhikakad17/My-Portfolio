import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certificates", label: "Certificates" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const loc = useLocation();
  return (
    <header className="navbar-glass">
      <div className="container nav-inner">
        <div className="brand">
          <Link to="/" className="brand-link">
            Siddhi Kakad
          </Link>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${loc.pathname === item.to ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
