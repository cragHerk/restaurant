import React from "react";
import Hero from "../components/hero";
import Section from "../components/section/section";
import SectionHeader from "../components/section-header/section-header";
import SectionBot from "../components/section-bot/section-bot";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SectionHeader />
      <Section />
      <SectionBot />
    </>
  );
};

export default HomePage;
