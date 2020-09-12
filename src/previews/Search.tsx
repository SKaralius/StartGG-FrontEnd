import React from "react";

function Reddit() {
  return (
    <div className="preview search">
      <div className="search-options">
        <button>site:reddit.com</button>
        <button>site:wikipedia.com</button>
        <button>site:stackexchange.com</button>
        <button>site:quora.com</button>
      </div>
      <input type="text" />
    </div>
  );
}

export default Reddit;
