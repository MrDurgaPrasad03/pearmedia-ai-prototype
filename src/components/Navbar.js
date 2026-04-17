import React from "react";

function Navbar({ toggleDark, dark }) {
  return (
    <header className="navbar">
      <div className="brand">
        <div className="brand-mark" />
        <div>
          <h2>Pear Media AI</h2>
          <span>Creative prompt studio</span>
        </div>
      </div>

      <button className="theme-btn" onClick={toggleDark}>
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Navbar;