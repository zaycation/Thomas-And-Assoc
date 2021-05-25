import React from "react";
import items from "../components/itemsList2";

import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

const AutoGallery = () => {
  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: -1,
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <>
      <div className="mx-2 my-5">
        <br />
        <h4 className="my-3 text-center">Automotive Gallery</h4>
        <br />
        <ProGallery
          items={items}
          options={options}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      </div>
    </>
  );
};

export default AutoGallery;
