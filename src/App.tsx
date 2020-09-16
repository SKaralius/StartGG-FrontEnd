import React, { useState } from "react";
import PreviewContainer from "./previews/PreviewsContainer";
import "./scss/App.scss";
import Search from "./previews/Search";
import { WEBSITES } from "./util/constants";

function App() {
  const [isSelected, setIsSelected] = useState<boolean | string>(false);
  const handleSetIsSelected = (website: string) => {
    setIsSelected(website);
  };
  return (
    <div className="App">
      <div className="previews">
        {isSelected ? (
          <PreviewContainer
            website={isSelected}
            handleLoadMore={() => false}
            expand={true}
          />
        ) : (
          <React.Fragment>
            <PreviewContainer
              website={WEBSITES.REDDIT}
              handleLoadMore={() => handleSetIsSelected(WEBSITES.REDDIT)}
              expand={false}
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
