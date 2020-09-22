import React from "react";

import YoutubeBar from "./YoutubeBar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import Shadow from "../components/Shadow";
import Pages from "../components/Pages";

function Youtube({
  handleLoadMore,
  expand,
  posts,
  handleSetPage,
  currentPage,
}: {
  handleLoadMore: () => void;
  expand: boolean;
  posts: any;
  handleSetPage?: (arg0: number) => void;
  currentPage?: number;
}) {
  dayjs.extend(relativeTime);
  dayjs.extend(duration);
  dayjs.extend(utc);
  function formatDuration(duration: string) {
    const milliseconds = dayjs.duration(duration).asMilliseconds();
    let date = "";
    if (milliseconds > 3600000) {
      date = dayjs.utc(milliseconds).format("HH:mm:ss");
    } else {
      date = dayjs.utc(milliseconds).format("mm:ss");
    }
    return date;
  }
  interface post {
    id: string;
    contentDetails: { duration: string };
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
          <div className="youtube-img-container">
            <a
              href={`https://youtube.com/watch?v=${post.id}`}
              className="youtube-link-img"
            >
              <img
                src={post.snippet.thumbnails.default.url}
                alt={post.snippet.title}
              />
            </a>
            <div className="youtube-duration">
              {formatDuration(post.contentDetails.duration)}
            </div>
          </div>
          <strong className="youtube-title">{post.snippet.title}</strong>
          <span className="youtube-channel-title">
            {post.snippet.channelTitle}
          </span>
          <span className="youtube-date">
            {dayjs(post.snippet.publishedAt).fromNow()}
          </span>
        </li>
      );
    });
    return (
      <div className="youtube">
        <YoutubeBar />
        <ul className="preview youtube-posts">
          {postCollection}
          {(currentPage === 0 || currentPage) && handleSetPage ? (
            <Pages currentPage={currentPage} setPage={handleSetPage} />
          ) : null}
        </ul>
        <Shadow handleLoadMore={handleLoadMore} expand={expand} />
      </div>
    );
  } else {
    return null;
  }
}

export default Youtube;
