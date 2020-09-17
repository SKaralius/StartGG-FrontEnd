import React from "react";

import YoutubeBar from "./YoutubeBar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Shadow from "../components/Shadow";

function Youtube({
  handleLoadMore,
  expand,
  posts,
}: {
  handleLoadMore: () => void;
  expand: boolean;
  posts: any;
}) {
  dayjs.extend(relativeTime);
  function formatDuration(duration: string) {
    //PT1M27S
    let formatedDuration: string = "";
    const durationArray = duration.split("");

    for (let i = durationArray.length; i >= 0; i--) {
      if (durationArray[i] === "S") {
        i--;
        formatedDuration += durationArray[i];
        i--;
        formatedDuration += durationArray[i];
        formatedDuration += ":";
      }
      if (durationArray[i] === "M") {
        i--;
        formatedDuration += durationArray[i];
        i--;
        if (typeof durationArray[i] === "number")
          formatedDuration += durationArray[i];
      }
    }
    formatedDuration = formatedDuration.split("").reverse().join("");
    return formatedDuration;
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
        <ul className="preview youtube-posts">{postCollection}</ul>
        <Shadow handleLoadMore={handleLoadMore} expand={expand} />
      </div>
    );
  } else {
    return null;
  }
}

export default Youtube;
