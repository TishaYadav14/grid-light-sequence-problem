import React from "react";

function Cell({ filled, onClick, IsDisabled, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
      disabled={IsDisabled}
    />
  );
}

export default Cell;