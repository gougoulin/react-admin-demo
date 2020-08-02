import React from "react";
import "../sass/style.scss";

function Section({ children, className }) {
  return (
    <section
      className={className ? "section__wrap " + className : "section__wrap"}
    >
      {children}
    </section>
  );
}

export default Section;
