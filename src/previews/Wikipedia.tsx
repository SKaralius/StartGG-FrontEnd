import React from "react";

function wikipedia({ handleLoadMore }: { handleLoadMore: () => void }) {
  return (
    <div className="preview wikipedia">
      <h1>wikipedia</h1>
      <button onClick={handleLoadMore}>MORE</button>
    </div>
  );
}

export default wikipedia;
