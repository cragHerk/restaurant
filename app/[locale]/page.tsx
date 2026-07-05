import React from "react";
import Hero from "../components/hero";
import Section from "../components/section/section";
import SectionHeader from "../components/section-header/section-header";
import SectionBot from "../components/section-bot/section-bot";
import Breakfast from "../components/breakfast/breakfast";
import Break from "../components/break/break";
import Breakfast2 from "../components/breakfast2/breakfast2";

const HomePage: React.FC = () => {
  return (
    <>
      {/* <Breakfast /> */}
      {/* <Break /> */}
      <Hero />
      <SectionHeader />
      <Breakfast2 />
      <Section />
      <SectionBot />
    </>
  );
};

export default HomePage;
