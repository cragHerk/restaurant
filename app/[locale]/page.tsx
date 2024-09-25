import React from "react";
import Hero from "../components/hero";
import Section from "../components/section/section";
import SectionHeader from "../components/section-header/section-header";
import SectionBot from "../components/section-bot/section-bot";
import Breakfast from "../components/breakfast/breakfast";

const HomePage: React.FC = () => {
  return (
    <>
      <Breakfast />
      <Hero />
      <SectionHeader />
      <Section />
      <SectionBot />
    </>
  );
};

export default HomePage;
