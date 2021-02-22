import React from "react";
// Previews
import Reddit from "./Reddit";
import Youtube from "./Youtube";
// Constants
import { WEBSITES } from "../util/constants";

function PreviewsContainer({
    handleLoadMore,
    website,
    expand,
    handleSetSubreddit,
    posts,
    handleSetPage,
    currentPage,
}: {
    handleLoadMore: () => void | boolean;
    website: string | boolean;
    expand: boolean;
    handleSetSubreddit: (arg0: string) => void;
    posts?: any;
    handleSetPage?: (arg0: number) => void;
    currentPage?: number;
}) {
    let Component = () => <React.Fragment />;
    switch (true) {
        case website === WEBSITES.REDDIT:
            Component = () => (
                <Reddit
                    handleLoadMore={handleLoadMore}
                    expand={expand}
                    posts={posts}
                    handleSetPage={handleSetPage}
                    currentPage={currentPage}
                    handleSetSubreddit={handleSetSubreddit}
                />
            );
            break;
        case website === WEBSITES.YOUTUBE:
            Component = () => (
                <Youtube
                    handleLoadMore={handleLoadMore}
                    expand={expand}
                    posts={posts}
                    handleSetPage={handleSetPage}
                    currentPage={currentPage}
                />
            );
            break;

        default:
            break;
    }
    return (
        <React.Fragment>
            <Component />
        </React.Fragment>
    );
}

export default PreviewsContainer;
