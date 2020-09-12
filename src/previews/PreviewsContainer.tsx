import React from "react";
// Previews
import Reddit from "./Reddit";
import Wikipedia from "./Wikipedia";
import Youtube from "./Youtube";
// Constants
import { WEBSITES } from "../util/constants";

function PreviewsContainer({
  handleLoadMore,
  website,
}: {
  handleLoadMore: () => void;
  website: string;
}) {
  let Component = () => <React.Fragment />;
  switch (true) {
    case website === WEBSITES.REDDIT:
      Component = () => <Reddit handleLoadMore={handleLoadMore} />;
      break;
    case website === WEBSITES.YOUTUBE:
      Component = () => <Youtube handleLoadMore={handleLoadMore} />;
      break;
    case website === WEBSITES.WIKIPEDIA:
      Component = () => <Wikipedia handleLoadMore={handleLoadMore} />;
      break;

    default:
      console.log("No such website");
      break;
  }
  return (
    <React.Fragment>
      <Component />
    </React.Fragment>
  );
}

export default PreviewsContainer;
