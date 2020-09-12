import React, { useState } from "react";
import Reddit from "../src/previews/Reddit";
import Wikipedia from "../src/previews/Wikipedia";
import Youtube from "../src/previews/Youtube";
import Search from "../src/previews/Search";
import "./scss/App.scss";

function App() {
  const [moreLoaded, setMoreLoaded] = useState<boolean>(false);
  function handleLoadMore() {
    setMoreLoaded(!moreLoaded);
  }
  return (
    <div className="App">
      <div className="previews">
        <Youtube />
        <Reddit />
        <Wikipedia handleLoadMore={handleLoadMore} />
        {moreLoaded ? (
          <div>
            <Youtube />
            <Reddit />
            <Wikipedia handleLoadMore={handleLoadMore} />
          </div>
        ) : null}
      </div>
      <Search />
    </div>
  );
}

export default App;
