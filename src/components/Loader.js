import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-wrap" aria-live="polite" aria-busy="true">
      <div className="spinner" />
      <span>Processing...</span>
    </div>
  );
}