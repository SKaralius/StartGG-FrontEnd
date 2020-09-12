import React from "react";

function Reddit({ handleLoadMore }: { handleLoadMore: () => void }) {
  return (
    <div className="preview reddit">
      <h1>Reddit</h1>
      <button onClick={handleLoadMore}>MORE</button>
    </div>
  );
}

export default Reddit;
