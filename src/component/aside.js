import React from "react";
import "../sass/style.scss";

function Aside({ children }) {
  return (
    <aside>
      <ul className="nav__wrap">{children}</ul>
    </aside>
  );
}

export default Aside;
