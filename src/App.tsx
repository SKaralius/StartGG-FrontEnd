import React from "react";
import PreviewContainer from "./previews/PreviewsContainer";
import "./scss/App.scss";
import Search from "./previews/Search";
import { WEBSITES } from "./util/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="previews">
        <FontAwesomeIcon size="2x" icon={["fab", "reddit"]} color="#FF5700" />
        <PreviewContainer
          website={WEBSITES.REDDIT}
          handleLoadMore={() => console.log("clicked")}
        />
        <FontAwesomeIcon size="2x" icon={["fab", "youtube"]} color="#FF0000" />
        <PreviewContainer
          website={WEBSITES.YOUTUBE}
          handleLoadMore={() => console.log("clicked")}
        />
        <Search />
      </div>
    </div>
  );
}

export default App;
