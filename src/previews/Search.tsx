import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  // Site names
  const button0 = { value: "site:reddit.com", displayName: "Reddit" };
  const button1 = { value: "site:wikipedia.com", displayName: "Wikipedia" };
  const button2 = {
    value: "site:stackexchange.com",
    displayName: "Stack Exchange",
  };
  const button3 = { value: "site:quora.com", displayName: "Quora" };
  // Names are mapped to buttons.
  const [searchInWebsites, setSearchInWebsites] = useState([
    { text: button0.value, selected: false },
    { text: button1.value, selected: false },
    { text: button2.value, selected: false },
    { text: button3.value, selected: false },
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
          <FontAwesomeIcon icon={["fab", "reddit"]} color="#FF5700" />
          {` ${button0.displayName}`}
        </button>
        <button
          className={`${determineClassName(1)}`}
          onClick={() => onButtonClick(1)}
        >
          <FontAwesomeIcon icon={["fab", "wikipedia-w"]} />
          {` ${button1.displayName}`}
        </button>
        <button
          className={`${determineClassName(2)}`}
          onClick={() => onButtonClick(2)}
        >
          <FontAwesomeIcon icon={["fab", "stack-exchange"]} color="#195398" />
          {` ${button2.displayName}`}
        </button>
        <button
          className={`${determineClassName(3)}`}
          onClick={() => onButtonClick(3)}
        >
          <FontAwesomeIcon icon={["fab", "quora"]} color="#a62100" />
          {` ${button3.displayName}`}
        </button>
        <button
          className={`${searchForImages ? "selected" : ""}`}
          onClick={() => setSearchForImages(!searchForImages)}
        >
          <FontAwesomeIcon icon={["fas", "images"]} color="#4c8bf5" />
          {` Images`}
        </button>
        <form
          className="search-form-input"
          onSubmit={(e) => {
            e.preventDefault();
            // "site:reddit.com+OR+site:qoura.com+";
            window.location.href = `https://www.google.com/search?q=${getDesiredWebsites()}${
              searchField?.current?.value
            }${searchForImages ? "&tbm=isch" : ""}`;
          }}
        >
          <FontAwesomeIcon icon={["fab", "google"]} color="#4c8bf5" />
          <input
            placeholder="Search..."
            type="text"
            onClick={onKeyClick}
            ref={searchField}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
