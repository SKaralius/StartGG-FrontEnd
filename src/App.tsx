import React, { useState } from "react";
import PreviewContainer from "./previews/PreviewsContainer";
import "./scss/App.scss";
import Search from "./previews/Search";
import { WEBSITES } from "./util/constants";
import { getRedditFrontPage } from "./util/api";
import useGetData from "./util/useGetData";

function App() {
  const [isSelected, setIsSelected] = useState<boolean | string>(false);
  const handleSetIsSelected = (website: string) => {
    setIsSelected(website);
  };
  const posts: any = useGetData(getRedditFrontPage);
  return (
    <div className="App">
      <div className="previews">
        {isSelected ? (
          <PreviewContainer
            website={isSelected}
            handleLoadMore={() => false}
            expand={true}
            posts={posts}
          />
        ) : (
          <React.Fragment>
            <PreviewContainer
              website={WEBSITES.REDDIT}
              handleLoadMore={() => handleSetIsSelected(WEBSITES.REDDIT)}
              expand={false}
              posts={posts}
            />
            <PreviewContainer
              website={WEBSITES.YOUTUBE}
              handleLoadMore={() => handleSetIsSelected(WEBSITES.YOUTUBE)}
              expand={false}
            />
          </React.Fragment>
        )}

        <Search />
      </div>
    </div>
  );
}

export default App;
