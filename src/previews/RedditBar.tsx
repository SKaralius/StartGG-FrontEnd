import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RedditBar({
    handleSetSubreddit,
}: {
    handleSetSubreddit: (arg0: string) => void;
}) {
    return (
        <div className="reddit-bar">
            <button onClick={() => handleSetSubreddit("")}>
                <FontAwesomeIcon
                    className="reddit-icon"
                    size="2x"
                    icon={["fab", "reddit"]}
                    color="#FF5700"
                />
                <svg
                    className="reddit-text"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="55px"
                    height="18px"
                    viewBox="0 0 55 18"
                >
                    <g>
                        <circle
                            fill="#ff4500"
                            cx="45.77"
                            cy="3.33"
                            r="2.05"
                        ></circle>
                        <path d="M16.73,12.05a1.44,1.44,0,0,0,1.54-1.48,4.91,4.91,0,0,0-.1-0.83,5.66,5.66,0,0,0-5.34-4.61c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a5.47,5.47,0,0,0,4.26-1.78,1.19,1.19,0,0,0-.19-1.77,1.25,1.25,0,0,0-1.53.16,3.78,3.78,0,0,1-2.54,1.09,3.42,3.42,0,0,1-3.14-3.08h7ZM12.82,7.44a3.3,3.3,0,0,1,3,2.56h-6A3.3,3.3,0,0,1,12.82,7.44Z"></path>
                        <path d="M7.44,6.32a1.15,1.15,0,0,0-1-1.14A4.46,4.46,0,0,0,2.31,6.69V6.54A1.15,1.15,0,1,0,0,6.54V16a1.18,1.18,0,0,0,1.08,1.2A1.15,1.15,0,0,0,2.31,16V11.15A3.51,3.51,0,0,1,6.15,7.47H6.38A1.15,1.15,0,0,0,7.44,6.32Z"></path>
                        <path d="M46.92,7.56a1.15,1.15,0,0,0-2.31,0V16a1.15,1.15,0,1,0,2.31,0V7.56Z"></path>
                        <path d="M29.87,1.15A1.15,1.15,0,0,0,28.72,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,29.87,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S26.39,15.13,24.62,15.13Z"></path>
                        <path d="M41.92,1.15A1.15,1.15,0,0,0,40.77,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,41.92,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S38.44,15.13,36.67,15.13Z"></path>
                        <path d="M52.91,16V7.44h1a1,1,0,0,0,1.06-1,1,1,0,0,0-1-1.09H52.91V3.76a1.18,1.18,0,0,0-1.08-1.19,1.15,1.15,0,0,0-1.23,1.15V5.38h-1a1,1,0,0,0-1.06,1,1,1,0,0,0,1,1.09h1V16a1.15,1.15,0,0,0,1.15,1.15h0A1.15,1.15,0,0,0,52.91,16Z"></path>
                    </g>
                </svg>
            </button>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const subreddit = new FormData(
                        e.target as HTMLFormElement
                    ).get("subreddit");
                    if (subreddit != null) {
                        handleSetSubreddit(subreddit.toString());
                    }
                }}
            >
                <label htmlFor="subreddit"></label>
                <input
                    name="subreddit"
                    id="subreddit"
                    type="text"
                    placeholder="Load a subreddit"
                />
                <button type="submit">
                    <FontAwesomeIcon icon={["fas", "search"]} color="#FF5700" />
                </button>
            </form>
        </div>
    );
}
