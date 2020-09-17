import React from "react";
import ExpandButton from "./ExpandButton";

export default function Shadow({
  handleLoadMore,
  expand,
}: {
  handleLoadMore: () => void;
  expand: boolean;
}) {
  return (
    <div className={expand ? "no-shadow" : "shadow"}>
      <ExpandButton handleLoadMore={handleLoadMore} expand={expand} />
    </div>
  );
}
