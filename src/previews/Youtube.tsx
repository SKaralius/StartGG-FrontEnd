import React from "react";
import useGetData from "../util/useGetData";
import { getYoutubeTrending } from "../util/api";

function Youtube({ handleLoadMore }: { handleLoadMore: () => void }) {
  const posts = useGetData(getYoutubeTrending);
  console.log(posts);
  return (
    <div className="preview youtube">
      <h1>Youtube</h1>
      <button onClick={handleLoadMore}>MORE</button>
    </div>
  );
}

export default Youtube;
