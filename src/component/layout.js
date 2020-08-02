import React from "react";
import Header from "./header";
import Aside from "./aside";
import Main from "./main";
import "../sass/style.scss";

function Layout({ main, currentUser, sidebarMenu }) {
  return (
    <>
      <Header currentUser={currentUser} />
      <Aside>{sidebarMenu}</Aside>
      <Main>{main}</Main>
    </>
  );
}

export default Layout;
