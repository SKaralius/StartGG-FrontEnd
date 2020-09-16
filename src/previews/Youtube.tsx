import React from "react";
import useGetData from "../util/useGetData";
import { getYoutubeTrending } from "../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Youtube({
  handleLoadMore,
  expand,
}: {
  handleLoadMore: () => void;
  expand: boolean;
}) {
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
        <FontAwesomeIcon size="2x" icon={["fab", "youtube"]} color="#FF0000" />
        <ul className="preview youtube-posts">{postCollection}</ul>
        <div className="youtube-shadow">
          <button className="youtube-more" onClick={handleLoadMore}>
            Expand
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Youtube;
