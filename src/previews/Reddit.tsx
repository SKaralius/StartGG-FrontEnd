import React from "react";
import useGetRedditFrontPage from "../util/useGetRedditFrontpage";

function Reddit({ handleLoadMore }: { handleLoadMore: () => void }) {
  const posts: any = useGetRedditFrontPage();
  console.log(posts?.data?.children[0].data);
  return posts.data ? (
    <div className="preview reddit">
      <div>
        <span>{posts?.data?.children[0].data.ups}</span>
        <img src={posts?.data?.children[0].data.thumbnail} alt="" />
        <p>{posts?.data?.children[0].data.title}</p>
      </div>
      <h1>Reddit</h1>
      <button onClick={handleLoadMore}>MORE</button>
    </div>
  ) : null;
}

export default Reddit;
