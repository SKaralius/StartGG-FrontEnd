import React from "react";
import PreviewContainer from "./previews/PreviewsContainer";
import "./scss/App.scss";
import Search from "./previews/Search";
import { WEBSITES } from "./util/constants";
import { getRedditFrontPage } from "./util/api";
import { getSubreddit } from "./util/api";
import { getYoutubeTrending } from "./util/api";
import useGetData from "./util/useGetData";
import useStickyState from "./util/useStickyState";

function App() {
    const [isSelected, setIsSelected] = useStickyState(false, "website");
    const [redditPage, setRedditPage] = useStickyState(0, "reddit-page");
    const [youtubePage, setYoutubePage] = useStickyState(0, "reddit-page");
    const [subreddit, setSubreddit] = useStickyState("", "subreddit");
    const handleSetIsSelected = (website: string | boolean) => {
        setIsSelected(website);
    };
    const handleSetPage = () => {
        if (isSelected === WEBSITES.REDDIT) return setRedditPage;
        if (isSelected === WEBSITES.YOUTUBE) return setYoutubePage;
    };
    const handleSetSubreddit = (name: string) => {
        setSubreddit(name);
    };
    const chooseCurrentPage = () => {
        if (isSelected === WEBSITES.REDDIT) return redditPage;
        if (isSelected === WEBSITES.YOUTUBE) return youtubePage;
    };
    const redditPosts: any = useGetData(
        () => {
            if (subreddit === "") return getRedditFrontPage(redditPage);
            else return getSubreddit(subreddit, redditPage);
        },
        redditPage,
        subreddit
    );
    const youtubePosts: any = useGetData(
        () => getYoutubeTrending(youtubePage),
        youtubePage
    );
    function getPosts() {
        if (isSelected === WEBSITES.REDDIT) return redditPosts;
        if (isSelected === WEBSITES.YOUTUBE) return youtubePosts;
    }
    return (
        <div className="App">
            <div className={`previews ${isSelected ? "expand" : ""}`}>
                {isSelected ? (
                    <PreviewContainer
                        website={isSelected}
                        handleLoadMore={() => handleSetIsSelected(false)}
                        expand={true}
                        posts={getPosts()}
                        handleSetPage={handleSetPage()}
                        currentPage={chooseCurrentPage()}
                        handleSetSubreddit={handleSetSubreddit}
                    />
                ) : (
                    <React.Fragment>
                        <PreviewContainer
                            website={WEBSITES.REDDIT}
                            handleLoadMore={() =>
                                handleSetIsSelected(WEBSITES.REDDIT)
                            }
                            expand={false}
                            posts={redditPosts}
                            handleSetPage={setRedditPage}
                            currentPage={redditPage}
                            handleSetSubreddit={handleSetSubreddit}
                        />
                        <PreviewContainer
                            website={WEBSITES.YOUTUBE}
                            handleLoadMore={() =>
                                handleSetIsSelected(WEBSITES.YOUTUBE)
                            }
                            expand={false}
                            posts={youtubePosts}
                            handleSetPage={setYoutubePage}
                            currentPage={youtubePage}
                            handleSetSubreddit={handleSetSubreddit}
                        />
                    </React.Fragment>
                )}

                <Search />
            </div>
        </div>
    );
}

export default App;
