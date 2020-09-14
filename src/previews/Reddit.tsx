import React from "react";
import useGetRedditFrontPage from "../util/useGetRedditFrontpage";

function Reddit({ handleLoadMore }: { handleLoadMore: () => void }) {
  // Sends a request to the server
  // Returns false before the reponse
  const posts: any = useGetRedditFrontPage();
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
      <div className="reddit">
        <ul className="preview reddit-post">{postCollection}</ul>
        <button onClick={handleLoadMore} className="reddit-more">
          MORE
        </button>
      </div>
    );
  } else return null;
}

export default Reddit;
