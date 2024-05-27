import React from "react";
import Hero from "../components/hero";
import Section from "../components/section/section";
import SectionHeader from "../components/section-header/section-header";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SectionHeader />
      <Section />
    </>
  );
};

export default HomePage;
