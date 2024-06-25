"use client";
import React from "react";
import Hero from "../components/About/Hero";
import TagLine from "../components/About/TagLine";
import Message from "../components/About/Message";
import Team from "../components/About/Team";
import Portfolio from "../components/About/Portfolio";
import ProjectList from "../components/ProjectList";
type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Hero />
      <TagLine />
      <Message />
      <Team />

      <Portfolio />

      {/* <ProjectList>
        <Portfolio />
      </ProjectList> */}
    </div>
  );
};
export default About;
