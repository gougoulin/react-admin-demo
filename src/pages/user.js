import React from "react";
import Layout from "../component/layout";
import "../sass/style.scss";
import { useSelector } from "react-redux";

function User({ sidebarMenu }) {
  const currentUser = useSelector((state) => state.currentUser);
  const main = "this is USER page";

  return (
    <>
      <Layout main={main} currentUser={currentUser} sidebarMenu={sidebarMenu} />
    </>
  );
}

export default User;
