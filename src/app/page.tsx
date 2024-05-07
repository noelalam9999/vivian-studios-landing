import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import NavbarCenter from "./components/NavbarCenter";
import RevealShowreel from "./components/RevealShowreel";
import ProjectList from "./components/ProjectList";
import ProjectCard from "./components/ProjectCard";
import LogoReveal from "./components/LogoReveal";
import CallToAction from "./components/CallToAction";

import { Suspense } from "react";

import ErrorBoundary from "./error";

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
        <ProjectList>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </ProjectList>
        <Suspense fallback={<>Loading...</>}>
          <LogoReveal></LogoReveal>
        </Suspense>
        <CallToAction></CallToAction>
      </ErrorBoundary>
    </>
  );
}
