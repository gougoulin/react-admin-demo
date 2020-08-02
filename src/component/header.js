import React from "react";
import "../sass/style.scss";
import VNav from "./vnav";

function Header(props) {
  const { avatar, name } = props.currentUser;
  return (
    <header>
      <div className="logo__wrap">
        <h1>AOTAO</h1>
      </div>
      <nav className="header__right">
        <div className="user__wrap">
          <div className="user__avatar">{avatar}</div>
          <div className="user__name">{name}</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
