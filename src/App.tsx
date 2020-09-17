import React from "react";
import PreviewContainer from "./previews/PreviewsContainer";
import "./scss/App.scss";
import Search from "./previews/Search";
import { WEBSITES } from "./util/constants";
import { getRedditFrontPage } from "./util/api";
import { getYoutubeTrending } from "./util/api";
import useGetData from "./util/useGetData";
import useStickyState from "./util/useStickyState";

function App() {
  const [isSelected, setIsSelected] = useStickyState(false, "website");
  const handleSetIsSelected = (website: string | boolean) => {
    setIsSelected(website);
  };
  const redditPosts: any = useGetData(getRedditFrontPage);
  const youtubePosts: any = useGetData(getYoutubeTrending);
  function getPosts() {
    if (isSelected === WEBSITES.REDDIT) return redditPosts;
    if (isSelected === WEBSITES.YOUTUBE) return youtubePosts;
  }
  return (
    <div className="App">
      <div className="previews">
        {isSelected ? (
          <PreviewContainer
            website={isSelected}
            handleLoadMore={() => handleSetIsSelected(false)}
            expand={true}
            posts={getPosts()}
          />
        ) : (
          <React.Fragment>
            <PreviewContainer
              website={WEBSITES.REDDIT}
              handleLoadMore={() => handleSetIsSelected(WEBSITES.REDDIT)}
              expand={false}
              posts={redditPosts}
            />
            <PreviewContainer
              website={WEBSITES.YOUTUBE}
              handleLoadMore={() => handleSetIsSelected(WEBSITES.YOUTUBE)}
              expand={false}
              posts={youtubePosts}
            />
          </React.Fragment>
        )}

        <Search />
      </div>
    </div>
  );
}

export default App;
