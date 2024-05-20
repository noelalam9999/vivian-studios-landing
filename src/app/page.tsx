"use client";
import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import NavbarCenter from "./components/NavbarCenter";
import RevealShowreel from "./components/RevealShowreel";
import ProjectList from "./components/ProjectList";
import ProjectCard from "./components/ProjectCard";
import LogoReveal from "./components/LogoReveal";
import CallToAction from "./components/CallToAction";

import { Suspense, useRef } from "react";

import ErrorBoundary from "./error";
import useProjectsDistance from "./hooks/projectsDistance";
import NonStickyProjectList from "./components/NonStickyProjectList";

export default function Home() {
  return (
    <>
      <ErrorBoundary>
        <HeroBanner>
          <NavbarCenter></NavbarCenter>
        </HeroBanner>
        <Suspense fallback={<>Loading...</>}>
          <RevealShowreel />
        </Suspense>
        {/* <div className={`${distance < 0 ? "sticky top-0" : ""} `}> */}

        <ProjectList>
          <ProjectCard></ProjectCard>
        </ProjectList>
        <Suspense fallback={<>Loading...</>}>
          <LogoReveal>
            <NonStickyProjectList>
              <ProjectCard></ProjectCard>
            </NonStickyProjectList>
          </LogoReveal>
        </Suspense>
        <CallToAction></CallToAction>
      </ErrorBoundary>
    </>
  );
}
