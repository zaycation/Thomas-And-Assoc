import React from "react";

const footer = () => {
  return (
    <div>
      <hr />
      <div className="d-flex align-items-stretch justify-content-between">
        <p className="ml-3">© 2021 Thomas & Associates Insurance Agency</p>
        <a href="tel:773-268-4888">
          <p className="mr-3 footer__txt">+1 (773) 268-4888</p>
        </a>
      </div>
    </div>
  );
};

export default footer;
