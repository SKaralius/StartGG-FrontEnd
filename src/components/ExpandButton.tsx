import React from "react";

export default function ExpandButton({
  handleLoadMore,
  expand,
}: {
  handleLoadMore: () => void;
  expand: boolean;
}) {
  return (
    <button onClick={handleLoadMore} className="more">
      {expand ? "Close" : "Expand"}
    </button>
  );
}
