import React from "react";
import PreviewContainer from "./previews/PreviewsContainer";
import "./scss/App.scss";
import Search from "./previews/Search";
import { WEBSITES } from "./util/constants";

function App() {
  return (
    <div className="App">
      <div className="previews">
        <PreviewContainer
          website={WEBSITES.REDDIT}
          handleLoadMore={() => console.log("clicked")}
        />
        <PreviewContainer
          website={WEBSITES.YOUTUBE}
          handleLoadMore={() => console.log("clicked")}
        />
        <PreviewContainer
          website={WEBSITES.WIKIPEDIA}
          handleLoadMore={() => console.log("clicked")}
        />
      </div>
      <Search />
    </div>
  );
}

export default App;
