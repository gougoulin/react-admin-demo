import React from "react";

function Formgroup({ setting }) {
  const { style, name, label, msg } = setting;
  return (
    <div className={style}>
      <label htmlFor={name}>{label}</label>
      <input type="text" />
      <div className="hidden">{msg}</div>
    </div>
  );
}

export default Formgroup;
