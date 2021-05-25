import React from "react";

const footer = () => {
  return (
    <div>
      <hr />
      <div className="d-flex align-items-stretch justify-content-between">
        <p className="ml-3">© 2021 Al's Window Tinting</p>
        <a href="tel:661-679-8468">
          <p className="mr-3 footer__txt">
            +1 (661) 679-8468
          </p>
        </a>
      </div>
    </div>
  );
};

export default footer;
