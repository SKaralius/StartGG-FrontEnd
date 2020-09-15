import React from "react";
import useGetData from "../util/useGetData";
import { getRedditFrontPage } from "../util/api";

function Reddit({ handleLoadMore }: { handleLoadMore: () => void }) {
  // Sends a request to the server
  // Returns false before the reponse
  const posts: any = useGetData(getRedditFrontPage);
  interface post {
    data: {
      ups: number;
      url: string;
      thumbnail: string;
      title: string;
      permalink: string;
      subreddit: string;
      id: string;
    };
  }
  // If posts received from server
  if (posts) {
    // Map posts to HTML
    const postCollection = posts.data.children.map((post: post) => {
      // Destructure data
      const {
        ups,
        url,
        thumbnail,
        title,
        permalink,
        subreddit,
        id,
      } = post.data;
      let thumbnailView = <React.Fragment />;
      switch (true) {
        case !thumbnail || thumbnail === "default" || thumbnail === "self":
          break;
        case thumbnail !== "nsfw":
          thumbnailView = (
            <a className="reddit-link-img" href={url}>
              <img src={thumbnail} alt={title} />
            </a>
          );
          break;
        case thumbnail === "nsfw":
          thumbnailView = (
            <a className="reddit-link-img" href={url}>
              <strong>NSFW IMG</strong>
            </a>
          );
      }
      return (
        <li key={id}>
          <div className="reddit-img-and-title">
            {thumbnailView}
            <a
              className="reddit-link-title"
              href={`https://old.reddit.com${permalink}`}
            >
              <p>{title}</p>
            </a>
          </div>
          <div className="reddit-img-and-subreddit">
            <strong className="reddit-upvotes">{ups}</strong>
            <a
              className="reddit-link-subreddit"
              href={`https://old.reddit.com/r/`}
            >
              <p>{`/r/${subreddit}`}</p>
            </a>
          </div>
        </li>
      );
    });

    return (
      <React.Fragment>
        <div className="reddit-shadow" />
        <div className="reddit">
          <ul className="preview reddit-posts">{postCollection}</ul>
          <button onClick={handleLoadMore} className="reddit-more">
            MORE
          </button>
        </div>
      </React.Fragment>
    );
  } else return null;
}

export default Reddit;
