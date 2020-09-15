import React from "react";
import useGetData from "../util/useGetData";
import { getYoutubeTrending } from "../util/api";

function Youtube({ handleLoadMore }: { handleLoadMore: () => void }) {
  const posts: any = useGetData(getYoutubeTrending);
  interface post {
    id: string;
    contentDetails: { duration: Number };
    snippet: {
      channelTitle: string;
      publishedAt: Date;
      thumbnails: any;
      title: string;
    };
  }
  console.log(posts);
  if (posts) {
    const postCollection = posts.map((post: post) => {
      return (
        <li key={post.id} className="youtube-post">
          <a
            href={`https://youtube.com/watch?v=${post.id}`}
            className="youtube-link-img"
          >
            <img
              src={post.snippet.thumbnails.default.url}
              alt={post.snippet.title}
            />
          </a>
          <strong className="youtube-title">{post.snippet.title}</strong>
          <span>{post.contentDetails.duration}</span>
          <span>{post.snippet.channelTitle}</span>
          <span>{post.snippet.publishedAt}</span>
        </li>
      );
    });
    return (
      <div className="youtube">
        <ul className="preview youtube-posts">
          {postCollection}
          <button onClick={handleLoadMore}>MORE</button>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Youtube;
