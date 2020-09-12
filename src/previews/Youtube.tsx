import React from "react";

function Youtube({ handleLoadMore }: { handleLoadMore: () => void }) {
  return (
    <div className="preview youtube">
      <h1>Youtube</h1>
      <button onClick={handleLoadMore}>MORE</button>
    </div>
  );
}

export default Youtube;
