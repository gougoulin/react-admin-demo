import React from "react";
import Layout from "../component/layout";
import "../sass/style.scss";
import { useSelector } from "react-redux";
import Section from "../component/section";
import PagePath from "../component/pagePath";

function Home({ sidebarMenu }) {
  const currentUser = useSelector((state) => state.currentUser);

  const main = (
    <div className="home__layout">
      <PagePath />
      <Section>
        <div className="section__title">General</div>
        <div className="section__general__inner">
          <div className="card card__red">card 1</div>
          <div className="card card__yellow">card 1</div>
          <div className="card card__green">card 1</div>
          <div className="card card__purple">card 1</div>
        </div>
      </Section>
      <Section>test 1</Section>
      <Section>
        <h1>hello from main page</h1>
      </Section>
    </div>
  );

  return (
    <>
      <Layout main={main} currentUser={currentUser} sidebarMenu={sidebarMenu} />
    </>
  );
}

export default Home;
