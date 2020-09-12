import React, { useState } from "react";
import PreviewContainer from "./previews/PreviewsContainer";
import "./scss/App.scss";
import Search from "./previews/Search";
import { WEBSITES } from "./util/constants";

function App() {
  const [moreLoaded, setMoreLoaded] = useState<boolean>(false);
  function handleLoadMore() {
    setMoreLoaded(!moreLoaded);
  }
  return (
    <div className="App">
      <div className="previews">
        <PreviewContainer
          website={WEBSITES.REDDIT}
          handleLoadMore={handleLoadMore}
        />
        <PreviewContainer
          website={WEBSITES.YOUTUBE}
          handleLoadMore={handleLoadMore}
        />
        <PreviewContainer
          website={WEBSITES.WIKIPEDIA}
          handleLoadMore={handleLoadMore}
        />
      </div>
      <Search />
    </div>
  );
}

export default App;
