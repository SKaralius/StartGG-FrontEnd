import React, { useRef, useState } from "react";

function Search() {
  // Site names
  const button0 = "site:reddit.com";
  const button1 = "site:wikipedia.com";
  const button2 = "site:stackexchange.com";
  const button3 = "site:quora.com";
  // Names are mapped to buttons.
  const [searchInWebsites, setSearchInWebsites] = useState([
    { text: button0, selected: false },
    { text: button1, selected: false },
    { text: button2, selected: false },
    { text: button3, selected: false },
  ]);
  const [searchForImages, setSearchForImages] = useState(false);
  const searchField = useRef<HTMLInputElement>(null);
  // strict null checks need us to check if searchField and current exist.
  const onKeyClick = () => {
    // but once current exists, it is of type HTMLInputElement, thus it
    // has the method focus!
    if (searchField && searchField.current) {
      searchField.current.focus();
    }
  };
  const onButtonClick = (numberOfButton: number) => {
    // Make a copy of state
    const searchInWebsitesCopy = [...searchInWebsites];
    // Select the button that was pressed and toggle it's value.
    searchInWebsitesCopy[numberOfButton].selected = !searchInWebsitesCopy[
      numberOfButton
    ].selected;
    // Write back to state
    setSearchInWebsites(searchInWebsitesCopy);
  };
  // Function translates the website object in state
  // to a search string that can be used for google
  function getDesiredWebsites() {
    let searchFilter = "";
    let selectedWebsiteCount = 0;
    searchInWebsites.forEach((website) => {
      if (website.selected) {
        // If first website selected, no "OR" is needed
        if (selectedWebsiteCount === 0) searchFilter += website.text + "+";
        else {
          searchFilter += "OR+" + website.text + "+";
        }
        selectedWebsiteCount++;
      }
    });
    return searchFilter;
  }
  function determineClassName(numberOfButton: number) {
    return searchInWebsites[numberOfButton].selected ? "selected" : "";
  }
  return (
    <div className="preview search">
      <div className="search-options">
        <button
          className={`${determineClassName(0)}`}
          onClick={() => onButtonClick(0)}
        >
          {button0}
        </button>
        <button
          className={`${determineClassName(1)}`}
          onClick={() => onButtonClick(1)}
        >
          {button1}
        </button>
        <button
          className={`${determineClassName(2)}`}
          onClick={() => onButtonClick(2)}
        >
          {button2}
        </button>
        <button
          className={`${determineClassName(3)}`}
          onClick={() => onButtonClick(3)}
        >
          {button3}
        </button>
        <button
          className={`${searchForImages ? "selected" : ""}`}
          onClick={() => setSearchForImages(!searchForImages)}
        >
          Search For Images
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // "site:reddit.com+OR+site:qoura.com+";
          window.location.href = `https://www.google.com/search?q=${getDesiredWebsites()}${
            searchField?.current?.value
          }${searchForImages ? "&tbm=isch" : ""}`;
        }}
      >
        <input type="text" onClick={onKeyClick} ref={searchField} />
      </form>
    </div>
  );
}

export default Search;
