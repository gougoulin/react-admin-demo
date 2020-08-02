import React from "react";
import { useLocation } from "react-router-dom";
import "../sass/style.scss";

function PagePath() {
  const location = useLocation();
  return (
    <>
      <h3 className="pagepath__title">
        {/* <Link className="link__normal" to="/">
          home
        </Link>
        <Link className="link__normal" to={location.pathname}>
          {location.pathname}
        </Link> */}
        Home{location.pathname}
      </h3>
    </>
  );
}

export default PagePath;
