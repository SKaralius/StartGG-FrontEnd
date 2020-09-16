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
  expand,
}: {
  handleLoadMore: () => void | boolean;
  website: string | boolean;
  expand: boolean;
}) {
  let Component = () => <React.Fragment />;
  switch (true) {
    case website === WEBSITES.REDDIT:
      Component = () => (
        <Reddit handleLoadMore={handleLoadMore} expand={expand} />
      );
      break;
    case website === WEBSITES.YOUTUBE:
      Component = () => (
        <Youtube handleLoadMore={handleLoadMore} expand={expand} />
      );
      break;
    case website === WEBSITES.WIKIPEDIA:
      Component = () => <Wikipedia handleLoadMore={handleLoadMore} />;
      break;

    default:
      break;
  }
  return (
    <React.Fragment>
      <Component />
    </React.Fragment>
  );
}

export default PreviewsContainer;
