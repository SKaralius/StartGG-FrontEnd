import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RedditBar from "./RedditBar";
import Shadow from "../components/Shadow";
import Pages from "../components/Pages";

function Reddit({
    handleLoadMore,
    expand,
    posts,
    handleSetPage,
    currentPage,
    handleSetSubreddit,
}: {
    handleLoadMore: () => void;
    expand: boolean;
    posts: any;
    handleSetPage?: (arg0: number) => void;
    currentPage?: number;
    handleSetSubreddit: (arg0: string) => void;
}) {
    function intToK(number: number) {
        const dividedNumber = Math.floor(number / 1000);
        if (dividedNumber === 0) return ` ${number}`;
        const modedNumber = Math.round((number % 1000) / 100);
        return ` ${dividedNumber}.${modedNumber === 10 ? 0 : modedNumber}k`;
    }
    // Sends a request to the server
    // Returns false before the reponse

    interface post {
        data: {
            ups: number;
            url: string;
            thumbnail: string;
            title: string;
            permalink: string;
            subreddit: string;
            id: string;
            num_comments: number;
        };
    }
    // If posts received from server
    if (posts) {
        let hasImage: boolean = false;
        // Map posts to HTML
        const postCollection = posts.map((post: post) => {
            // Destructure data
            const {
                ups,
                url,
                thumbnail,
                title,
                permalink,
                subreddit,
                id,
                num_comments,
            } = post.data;
            let thumbnailView = <React.Fragment />;

            switch (true) {
                case !thumbnail ||
                    thumbnail === "default" ||
                    thumbnail === "self" ||
                    thumbnail === "spoiler" ||
                    thumbnail === "image":
                    break;
                case thumbnail !== "nsfw":
                    thumbnailView = (
                        <a className="reddit-link-img" href={url}>
                            <img src={thumbnail} alt={title} />
                        </a>
                    );
                    hasImage = true;
                    break;
                case thumbnail === "nsfw":
                    thumbnailView = (
                        <a className="reddit-link-img" href={url}>
                            <strong>NSFW IMG</strong>
                        </a>
                    );
                    hasImage = true;
            }
            return (
                <li key={id}>
                    <div className="reddit-img-and-title">
                        {thumbnailView}
                        <a
                            className="reddit-link-title"
                            href={`https://old.reddit.com${permalink}`}
                        >
                            <p
                                className={
                                    hasImage ? "reddit-title-with-img" : ""
                                }
                            >
                                {title}
                            </p>
                        </a>
                    </div>
                    <div className="reddit-upvotes-and-subreddit">
                        <p className="reddit-upvotes">
                            <FontAwesomeIcon
                                icon={["fas", "arrow-alt-circle-up"]}
                                color="#FF5700"
                            />
                            {intToK(ups)}
                        </p>
                        <a
                            className="reddit-link-comments"
                            href={`https://old.reddit.com${permalink}`}
                        >
                            <p>
                                <FontAwesomeIcon
                                    icon={["fas", "comment-alt"]}
                                    color="#878a8c"
                                />
                                {` ${intToK(num_comments)} Comments`}
                            </p>
                        </a>
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
            <div className={`reddit ${expand ? "expand" : ""}`}>
                <RedditBar handleSetSubreddit={handleSetSubreddit} />
                <ul
                    className={`preview reddit-posts ${expand ? "expand" : ""}`}
                >
                    {postCollection}
                    {(currentPage === 0 || currentPage) && handleSetPage ? (
                        <Pages
                            currentPage={currentPage}
                            setPage={handleSetPage}
                        />
                    ) : null}
                </ul>
                <Shadow handleLoadMore={handleLoadMore} expand={expand} />
            </div>
        );
    } else return null;
}

export default Reddit;
